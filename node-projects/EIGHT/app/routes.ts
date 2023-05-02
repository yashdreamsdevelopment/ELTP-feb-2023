import { Router } from "express";
import { processClosureExplanation, processMusicExplanation } from "./functionality";

const router = Router();

router.get("/closure-explanation/:name", (req, res, next) => {
    const user = req.params.name;
    const result = processClosureExplanation(user);
    res.send({ data: result, err: null });
});

router.get("/music-explanation", (req, res, next) => {
    const result = processMusicExplanation();
    res.send({data: result, err: null});
})

router.post("/", (req, res, next) => {
    res.send({ data: 'abcd', err: null });
});

export default router;

