import Meal from "../module/meal.js";

const createMeal = async (req, res) => {
    try {
        const userId = req.cookies.userId;

        if (!userId) {
            return res.status(401).json({ msg: 'Usuário não autenticado' });
        }

        const meal = new Meal(req.body);
        meal.user = userId;
        meal.dateTime = new Date();

        await meal.save();
        res.status(200).json({ msg: 'Refeição criada com sucesso', data: meal });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Ocorreu um erro no servidor, tente novamente mais tarde' });
    }
};

const updateMeal = async (req, res) => {
    try {
        const userId = req.cookies.userId;
        const meal = await Meal.findOne({ _id: req.params.id, user: userId });

        if (!meal) {
            return res.status(404).json({ msg: 'Refeição não encontrada' });
        }

        const updatedMeal = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedMeal) {
            return res.status(404).json({ msg: 'Erro ao atualizar a refeição' });
        }

        res.status(200).json({ msg: 'Refeição atualizada com sucesso', data: updatedMeal });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Ocorreu um erro no servidor, tente novamente mais tarde' });
    }
};


const deleteMeal = async (req, res) => {
    try {
        const userId = req.cookies.userId;
        const meal = await Meal.findOne({ _id: req.params.id, user: userId });

        if (!meal) {
            return res.status(404).json({ msg: 'Refeição não encontrada' });
        }

        await meal.remove();

        res.status(200).json({ msg: 'Refeição deletada com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Ocorreu um erro no servidor, tente novamente mais tarde' });
    }
};

const listMeals = async (req, res) => {
    try {
        const userId = req.cookies.userId;
        const meals = await Meal.find({ user: userId });

        res.status(200).json({ msg: 'Refeições obtidas com sucesso', data: meals });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Ocorreu um erro no servidor, tente novamente mais tarde' });
    }
};


const getOneMeal = async (req, res) => {
    try {
        const userId = req.cookies.userId;
        const meal = await Meal.findOne({ _id: req.params.id, user: userId });

        if (!meal) {
            return res.status(404).json({ msg: 'Refeição não encontrada' });
        }

        res.status(200).json({ msg: 'Refeição obtida com sucesso', data: meal });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Ocorreu um erro no servidor, tente novamente mais tarde' });
    }
};


export { createMeal, deleteMeal, updateMeal, getOneMeal, listMeals };