import UserRouter from '../feature-modules/user/user.routes';
import TaskRouter from '../feature-modules/tasks/tasks.routes';
import { Route, Routes } from './routes.types';

export const routes: Routes = [
    new Route("/user", UserRouter),
    new Route("/task", TaskRouter)
];