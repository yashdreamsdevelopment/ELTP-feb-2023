import usersRoutes from "../feature-modules/users/users.routes";
import tasksRoutes from "../feature-modules/tasks/tasks.routes";
import { Routes } from "./routes.types";

export const routes: Routes = [
    usersRoutes,
    tasksRoutes
]