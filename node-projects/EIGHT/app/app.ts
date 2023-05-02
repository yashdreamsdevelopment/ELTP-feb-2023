import express from 'express';
import router from './routes';

export const startServer = () => {
    const app = express();

    app.use("/", router);

    app.listen(
        process.env.PORT,
        () => console.log('SERVER STARTED')
    );
}
