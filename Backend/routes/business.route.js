import  express  from "express";
import  { addBusiness,userBusiness,deleteBusiness}  from "../controllers/business.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/addbusiness", verifyToken, addBusiness);
router.get("/myBusiness",verifyToken, userBusiness);
router.delete("/removebusiness/:businessId",verifyToken, deleteBusiness);

// router.post("/google", google);
export default router;



