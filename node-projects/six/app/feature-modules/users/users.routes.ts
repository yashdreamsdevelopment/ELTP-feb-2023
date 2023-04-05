import { Router } from "express";
import { Route } from "../../routes/routes.types";
import { v4 } from "uuid";

const router = Router();

interface IUser {
    id: string;
    name: string;
    age: number;
    isDeleted: boolean;
}

const users: IUser[] = [];

// get all
router.get("/", (req, res, next) => {
    res.send(users);
});

// create
router.post("/", (req, res, next) => {
    const user = {...req.body, isDeleted: false, id: v4() };
    users.push(user);
    res.send(user);
});

router.put("/", (req, res, next) => {
    const { id } = req.body;
    const userIndex = users.findIndex();
    users[userIndex] = req.body;
});

router.delete("/", (req, res, next) => {

});

export default new Route(
    "/user",
    router
);