import User from "../module/user.js";
import { serialize } from 'cookie';

const addUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();

        const userCookie = serialize('userId', user._id, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
        });

        res.setHeader('Set-Cookie', userCookie);

        res.status(200).json({ msg: 'Usuário criado com sucesso', data: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Ocorreu um erro no servidor, tente novamente mais tarde' });
    }
};

export { addUser }