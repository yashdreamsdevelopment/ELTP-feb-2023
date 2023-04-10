import UserRouter from './user/user.routes';
import TaskRouter from './tasks/tasks.routes';
import { Routes } from '../routes/routes.types';

const routes: Routes = [
    UserRouter,
    TaskRouter,
];

export default routes;