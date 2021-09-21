import asyncHandler from 'express-async-handler';
import Dao from '../models/DaoModel.js';
import bcrypt from 'bcryptjs';

export const addDaoController = asyncHandler(async (req, res) => {
  try {
    const {
      email,
      full_name,
      date_founded,
      about_dao,
      logo_link,
      category,
      gov_token_name,
      token_symbol,
      blockchain,
      discord_link,
      website_link,
      dao_structure,
      description,
      voting_process,
      total_value_locked,
      revenue_streams,
      tech_stack,
      governance_token_address,
      notes,
      twitter_handle,
      github_organization_handle,
      headquarters,
    } = req.body;

    const daoExist = await Dao.findOne({ full_name });

    if (daoExist) {
      res.status(400).json({ message: 'Doa Already Exist' });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashed_address = await bcrypt.hash(governance_token_address, salt);

      const newDao = new Dao({
        email,
        full_name,
        date_founded,
        about_dao,
        logo_link,
        description,
        category,
        gov_token_name,
        token_symbol,
        blockchain,
        discord_link,
        website_link,
        total_value_locked,
        dao_structure,
        voting_process,
        revenue_streams,
        tech_stack,
        governance_token_address: hashed_address,
        notes,
        headquarters,
        twitter_handle,
        github_organization_handle,
        discord_link,
      });

      const savedDao = await newDao.save();

      res.json({
        message: `${full_name} created successfully`,
        savedDao,
      });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

export const getAllDaoController = asyncHandler(async (req, res) => {
  try {
    const dao = await Dao.find({});

    if (dao) {
      res.json(dao);
    } else {
      res.status(404).json({ message: 'Dao not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error: try again later' });
  }
});

export const getDaoByIdController = asyncHandler(async (req, res) => {
  try {
    const dao = await Dao.findById(req.params.daoId);

    if (dao) {
      res.json(dao);
    } else {
      res.status(404).json({ message: 'Dao not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error: try again later' });
  }
});
