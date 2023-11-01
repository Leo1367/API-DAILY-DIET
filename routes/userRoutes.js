import { Router } from "express";
import { addUser } from "../controllers/userControllers.js";

const router = Router()

router.post('/', addUser)

export default router;