import { Router } from "express";
import { Route } from "../../routes/routes.types";
import usersService from "./users.service";
import { ResponseHandler } from "../../utility/response-handler";

const router = Router();

// get all
router.get("/", (req, res, next) => {
    const result = usersService.getAll();
    res.send(new ResponseHandler(result));
});

// create
router.post("/", (req, res, next) => {
    const user = req.body;
    const result = usersService.create(user);
    res.send(new ResponseHandler(result));
});

router.put("/", (req, res, next) => {
    try {
        const user = req.body;
        const result = usersService.update(user);
        res.send(new ResponseHandler(result));
    } catch (e: any) {
        // calls the error handling middleware
        next(e);
    }
});

// create a route param called id
// http://localhost:PORT/users/<id>
// eg - http://localhost:PORT/users/1234567890
// req.params = { id: '<id>' }
// eg - { id: '1234567890' }
router.delete("/:id", (req, res, next) => {

    try {
        const { id } = req.params;
        const result = usersService.remove(id);
        res.send(new ResponseHandler(result));
    } catch (e: any) {
        next(e);
    }

});

export default new Route(
    "/user",
    router
);