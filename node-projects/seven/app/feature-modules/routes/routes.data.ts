import authRoutes from "../auth/auth.routes";
import productRoutes from "../product/product.routes";
import { Routes } from "./routes.types";

export const routes: Routes = [
    productRoutes,
    authRoutes
];