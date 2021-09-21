import express from 'express';
import {
  addDaoController,
  getAllDaoController,
  getDaoByIdController,
} from '../controllers/daoController.js';

const router = express.Router();

router.get('/', getAllDaoController);

router.post('/', addDaoController);

router.get('/:daoId', getDaoByIdController);

export default router;
