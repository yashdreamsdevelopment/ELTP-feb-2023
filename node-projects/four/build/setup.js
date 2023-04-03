"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const _1 = require(".");
const { PORT } = process.env;
_1.app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
