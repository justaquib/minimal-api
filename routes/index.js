/************************************************************
 R O U T E R
************************************************************/
import express from "express";

const router = express.Router();

// router.use(helpers.checkBrowser);
router.route("/").get((req, res) => res.status(200).send("Welcome to the api project"));

export default router