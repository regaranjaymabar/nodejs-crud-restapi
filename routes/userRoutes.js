import express from "express";
import { deleteUsers, getUsers, insertUsers, showUser, updateUser} from "../controllers/userContrl.js";

const router = express.Router();

router.get("/",getUsers);
router.post("/",insertUsers);
router.get("/",showUser);
router.put("/",updateUser);
router.delete("/",deleteUsers);
export default router;