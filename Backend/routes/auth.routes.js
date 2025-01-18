import  express  from "express";
import  {signup, signin,signout, getUser}  from "../controllers/auth.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/signin", signin);
router.post("/signout", signout);
router.get("/me",verifyToken,getUser);
// router.post("/google", google);
export default router



