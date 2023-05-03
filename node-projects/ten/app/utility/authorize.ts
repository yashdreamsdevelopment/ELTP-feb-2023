import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

export const authorize = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;
        if (!token) return next({ message: 'UNAUTHORIZED', statusCode: 403 });

        const { JWT_SECRET_KEY } = process.env;
        const decryptedData = verify(token, JWT_SECRET_KEY || "");

        next();
    } catch (e) {
        next({ message: 'UNAUTHORIZED', statusCode: 403 });
    }
}