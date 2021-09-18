import express from 'express';
import { addDaoController } from '../controllers/daoController.js';

const router = express.Router();

router.post('/', addDaoController);

export default router;
