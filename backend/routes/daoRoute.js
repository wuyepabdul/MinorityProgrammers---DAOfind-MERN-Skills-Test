import express from 'express';
import {
  addDaoController,
  getAllDaoController,
  getDaoByIdController,
} from '../controllers/daoController.js';

const router = express.Router();

router.get('/', addDaoController);

router.post('/', getAllDaoController);

router.get('/:daoId', getDaoByIdController);

export default router;
