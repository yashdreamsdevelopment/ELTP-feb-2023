import authRoutes from "../feature-modules/auth/auth.routes";
import userRoutes from "../feature-modules/users/user.routes";
import { Routes } from "./routes.types";

export const routes: Routes = [
    authRoutes,
    userRoutes
];