import { Router } from "express";
import { Route } from "../../routes/routes.types";
import usersService from "./users.service";

const router = Router();

// get all
router.get("/", (req, res, next) => {
    const result = usersService.getAll();
    res.send(result);
});

// create
router.post("/", (req, res, next) => {
    const user = req.body;
    const result = usersService.create(user);
    res.send(result);
});

router.put("/", (req, res, next) => {
    const user = req.body;
    const result = usersService.update(user);
    res.send(result);
});

// create a route param called id
// http://localhost:PORT/users/<id>
// eg - http://localhost:PORT/users/1234567890
// req.params = { id: '<id>' }
// eg - { id: '1234567890' }
router.delete("/:id", (req, res, next) => {
    const { id } = req.params;
    const result = usersService.remove(id);
    res.send(result);
});

export default new Route(
    "/user",
    router
);