import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import { ExcludedPaths } from "../routes/routes.types";

export const authorize = (excludedPaths: ExcludedPaths) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if (excludedPaths.find(p => p.path === req.path && req.method === p.method)) {
                return next();
            }

            const token = req.headers.authorization;
            if (!token) return next({ message: 'UNAUTHORIZED', statusCode: 403 });

            const { JWT_SECRET_KEY } = process.env;
            const decryptedData = verify(token, JWT_SECRET_KEY || "");

            next();
        } catch (e) {
            next({ message: 'UNAUTHORIZED', statusCode: 403 });
        }
    }
}