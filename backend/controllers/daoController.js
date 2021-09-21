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

export const updateDaoController = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const daoToUpdate = await Dao.findById(req.params.daoId);
    const salt = await bcrypt.genSalt(10);
    const hashed_address = await bcrypt.hash(
      req.body.governance_token_address,
      salt
    );

    if (daoToUpdate) {
      daoToUpdate.email = req.body.name || daoToUpdate.email;
      daoToUpdate.full_name = req.body.full_name || daoToUpdate.full_name;
      daoToUpdate.date_founded =
        req.body.date_founded || daoToUpdate.date_founded;
      daoToUpdate.about_dao = req.body.about_dao || daoToUpdate.about_dao;
      daoToUpdate.logo_link = req.body.logo_link || daoToUpdate.logo_link;
      daoToUpdate.category = req.body.category || daoToUpdate.category;
      daoToUpdate.gov_token_name =
        req.body.gov_token_name || daoToUpdate.gov_token_name;
      daoToUpdate.token_symbol =
        req.body.token_symbol || daoToUpdate.token_symbol;
      daoToUpdate.blockchain = req.body.blockchain || daoToUpdate.blockchain;
      daoToUpdate.discord_link =
        req.body.discord_link || daoToUpdate.discord_link;
      daoToUpdate.website_link =
        req.body.website_link || daoToUpdate.website_link;
      daoToUpdate.dao_structure =
        req.body.dao_structure || daoToUpdate.dao_structure;
      daoToUpdate.description = req.body.description || daoToUpdate.description;
      daoToUpdate.voting_process =
        req.body.voting_process || daoToUpdate.voting_process;
      daoToUpdate.total_value_locked =
        req.body.total_value_locked || daoToUpdate.total_value_locked;
      daoToUpdate.revenue_streams =
        req.body.revenue_streams || daoToUpdate.revenue_streams;
      daoToUpdate.tech_stack = req.body.tech_stack || daoToUpdate.tech_stack;
      daoToUpdate.twitter_handle =
        req.body.twitter_handle || daoToUpdate.twitter_handle;
      daoToUpdate.github_organization_handle =
        req.body.github_organization_handle ||
        daoToUpdate.github_organization_handle;
      daoToUpdate.headquarters =
        req.body.headquarters || daoToUpdate.headquarters;
      daoToUpdate.notes = req.body.notes || daoToUpdate.notes;
      daoToUpdate.governance_token_address =
        hashed_address || daoToUpdate.governance_token_address;

      const updatedDao = await daoToUpdate.save();
      res.status(201).json({ message: 'Dao Updated', updatedDao });
    } else {
      res.status(404).json({ message: 'Dao not found' });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Server Error, try again later' });
  }
});
