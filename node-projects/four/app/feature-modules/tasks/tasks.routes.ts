import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
    res.send("[GET] task");
})

router.post("/", (req, res, next) => {
    res.send("[post] task");
})

router.patch("/", (req, res, next) => {
    res.send("[patch] task");
})

router.put("/", (req, res, next) => {
    res.send("[put] task");
})

router.delete("/", (req, res, next) => {
    res.send("[delete] task");
});


export default router;