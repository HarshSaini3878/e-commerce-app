import express from 'express';
import { IsAdmin, requireSignIn } from '../middlewares/auth.middleware';
import {createCategoryController} from './../controllers/CategoryController'
const router=expres();

router.post('create-category',requireSignIn,IsAdmin,createCategoryController)
export default router;