const userRouter = require("express").Router()
const userCtrl = require("../controllers/userCtrl")
const authMiddle = require("../middleware/authMiddleware")
const authAdmin = require("../middleware/authAdmin")

userRouter.route("/register").post(userCtrl.register)

userRouter.route("/activation").post(userCtrl.activateEmail)

userRouter.route("/login").post(userCtrl.login)

userRouter.route("/refresh_token").post(userCtrl.getAccessToken)

userRouter.route("/forgot").post(userCtrl.forgotPassword)

userRouter.route("/reset").post(authMiddle, userCtrl.resetPassword)

userRouter.route("/infor").get(authMiddle, userCtrl.getUserInfor)

userRouter.route("/all_infor").get(authMiddle, authAdmin, userCtrl.getAllUserInfor)

userRouter.route("/update").patch(authMiddle, userCtrl.userUpdate)

userRouter.route("/update_role/:id").patch(authMiddle, authAdmin, userCtrl.updateRole)

userRouter.route("/delete_user/:id").delete(authMiddle, authAdmin, userCtrl.deleteUser)

userRouter.route("/logout").get(userCtrl.logout)


module.exports = userRouter
