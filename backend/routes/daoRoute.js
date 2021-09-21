import express from 'express';
import {
  addDaoController,
  getAllDaoController,
  getDaoByIdController,
  updateDaoController,
} from '../controllers/daoController.js';

const router = express.Router();

router.get('/', getAllDaoController);

router.post('/', addDaoController);

router.get('/:daoId', getDaoByIdController);

router.put('/:daoId', updateDaoController);

export default router;
