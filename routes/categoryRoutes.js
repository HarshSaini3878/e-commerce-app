import express from 'express';
import { IsAdmin, requireSignIn } from '../middlewares/auth.middleware.js';
import {categoryControlller, createCategoryController, deleteCategoryCOntroller, singleCategoryController, updateCategoryController} from './../controllers/CategoryController.js'
const router=express.Router();

router.post('/create-category',requireSignIn,IsAdmin,createCategoryController);
router.put('/update-category/:id',requireSignIn,IsAdmin,updateCategoryController)
router.get('/get-category',categoryControlller);
router.get('/single-category/:slug',singleCategoryController);
router.delete('/delete-category/:id',requireSignIn,IsAdmin,deleteCategoryCOntroller)
export default router;