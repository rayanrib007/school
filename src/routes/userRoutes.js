import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";
const router = new Router();

//não deveria exister em um sistema real:
// router.get('/', UserController.index);
// router.get('/:id', UserController.show);
//
router.post("/", userController.store);
router.put("/", loginRequired, userController.update);
router.delete("/", loginRequired, userController.delete);

export default router;
