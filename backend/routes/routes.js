
import express  from "express";
import userSignup from "../controller/userController.js";
import { userLogin } from "../controller/userController.js";
import { getProducts } from "../controller/productController.js";


const router=express.Router();
router.post('/signup',userSignup );
router.post('/login',userLogin);
router.get('/products',getProducts);
export default router;