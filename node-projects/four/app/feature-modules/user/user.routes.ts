import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
    res.send("[GET] user");
})

router.post("/", (req, res, next) => {
    res.send("[post] user");
})

router.patch("/", (req, res, next) => {
    res.send("[patch] user");
})

router.put("/", (req, res, next) => {
    res.send("[put] user");
})

router.delete("/", (req, res, next) => {
    res.send("[delete] user");
});

export default router;