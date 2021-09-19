import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const DaoSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      text: true,
      maxlength: 32,
    },
    full_name: {
      type: String,
      trim: true,
      required: true,
      text: true,
      maxlength: 32,
    },
    description: {
      type: String,
      maxlength: 2000,
      text: true,
    },
    date_founded: { type: String },
    date_created: { type: String },
    logo_link: {
      type: String,
      default:
        'https://res.cloudinary.com/dulswuyep/image/upload/v1601038023/profiles/noPic2_rmgvsc.png',
    },
    about_dao: {
      type: String,
      maxlength: 2000,
      text: true,
    },
    category: {
      enum: [
        'Protocol',
        'Service',
        'Grant',
        'Media',
        'Social',
        'Investment',
        'Platform',
        'Collector',
      ],
    },
    governance_token_name: {
      type: String,
      trim: true,
      text: true,
    },
    governance_token_symbol: {
      type: String,
      trim: true,
      text: true,
    },
    governance_token_address: {
      type: String,
      trim: true,
      text: true,
    },
    dao_structure: {
      enum: ['shares', 'gov_token', 'tbd'],
    },
    revenue_streams: {
      type: String,
      trim: true,
      text: true,
    },
    voting_process: {
      type: String,
      trim: true,
      text: true,
    },
    total_value_locked: { type: Number },
    tech_stack: {
      type: String,
      text: true,
    },
    notes: {
      type: String,
      text: true,
    },
    website_link: {
      type: String,
      text: true,
    },
    blockchain: {
      enum: [
        'Ethereum',
        'Polygon',
        'Binance_Smart_Chain',
        'Harmony',
        'Solana',
        'Algorand',
        'Stellar',
        'NEAR',
        'IBM_Blockchain',
        'Hyperledger_Fabric',
        'Tezos',
        'EOSIO',
        'Waves',
        'Riple',
      ],
    },
    headquarters: {
      type: { String },
      text: true,
    },
    approvalStage: {
      enum: ['Submission'],
    },
  },
  { timestamps: true }
);

const Dao = mongoose.model('Dao', DaoSchema);
export default Dao;
