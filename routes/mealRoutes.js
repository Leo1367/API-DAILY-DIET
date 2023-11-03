import { Router } from "express";
import { calculateMetrics, createMeal, deleteMeal, getOneMeal, listMeals, updateMeal } from "../controllers/mealControllers.js";
import auth from "../middlewares/auth.js";

const router = Router();

router.post('/create-meal', auth, createMeal)
router.get('/list-meals', auth, listMeals)
router.get('/calculate-metrics', auth, calculateMetrics)
router.get('/:id', auth, getOneMeal)
router.put('/:id', auth, updateMeal)
router.delete('/:id', auth, deleteMeal)

export default router;