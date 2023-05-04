import authRoutes from "../feature-modules/auth/auth.routes";
import userRoutes from "../feature-modules/users/user.routes";
import { ExcludedPaths, Routes } from "./routes.types";

export const routes: Routes = [
    authRoutes,
    userRoutes
];

export const excludedPaths: ExcludedPaths = [
    { path: "/auth/login", method: "POST" },
    { path: "/auth/register", method: "POST" },
]