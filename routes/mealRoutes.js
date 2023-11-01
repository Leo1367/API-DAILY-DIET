import { Router } from "express";
import { createMeal, deleteMeal, getOneMeal, listMeals, updateMeal } from "../controllers/mealControllers.js";
import auth from "../middlewares/auth.js";

const router = Router();

router.post('/', auth, createMeal)
router.get('/', auth, listMeals)
router.get('/:id', auth, getOneMeal)
router.put('/:id', auth, updateMeal)
router.delete('/:id', auth, deleteMeal)

export default router;