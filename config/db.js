import mongoose from 'mongoose';

const conectDB = async () => {
    try {
        await mongoose.connect(process.env.URL_DB);
        console.log('MongoDB conectado')
    } catch (error) {
        console.error('Erro ao conectar com MongoDB:', error);
        process.exit(1);
    }
}

export default conectDB;