const express = require('express');
const { response } = require('../app');
const router = express.Router();
const admincontrol = require("../control/admincontroller")
const categoryimgupload= require("../utilities/imageUpload")
const multer = require('multer');
const { compareSync } = require('bcrypt');
const verifyLogin=require("../middlewares/adminMiddlewares")


router.get('/', admincontrol.getadminPage)
router.get("/home", verifyLogin,admincontrol.getAdminDashboard)
router.get("/logout",admincontrol.adminLogout)
router.get("/listusers",verifyLogin,admincontrol.getUserlist)
router.get("/blockuser/:id",verifyLogin,admincontrol.adminBlockUser)
router.get("/unblockuser/:id",verifyLogin,admincontrol.adminUnblockUser)
router.get("/addproduct",verifyLogin,admincontrol.adminAddproduct)
router.get("/categories",verifyLogin,admincontrol.adminCategoryManagement)
router.get("/editcategory/:id",verifyLogin,admincontrol.adminEditCategory)
router.get("/listproducts",verifyLogin,admincontrol.listProducts)
router.get("/orders",verifyLogin,admincontrol.adminListorders)
router.get("/orderaction/:id",verifyLogin,admincontrol.adminOrderDetails)


router.post('/login',admincontrol.adminLogin)
router.post("/addcategory",verifyLogin,categoryimgupload.single('image'),admincontrol.adminAddCategory)
router.post("/add_product",verifyLogin,categoryimgupload.array('image',4),admincontrol.adminAddProduct)
router.post("/changeorderstatus",admincontrol.adminChangeOrderStatus)




module.exports = router;
