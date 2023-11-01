const auth = (req, res, next) => {
    const userId = req.cookies.userId;

    if (!userId) {
        return res.status(401).json({ msg: 'Usuário não autenticado' });
    }

    next();
};

export default auth;
