import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const SocialMediaSchema = new mongoose.Schema({
  dao: { type: ObjectId, ref: 'Dao' },
  twitter_handle: { type: String },
  github_organization_handle: { type: String },
  telegram_link: { type: String },
  linkedin_company_link: { type: String },
  discord_link: { type: String },
  support_email: { type: String },
  twitter_followers: { type: Number },
});

const SocialMedia = mongoose.model('SocialMedia', SocialMediaSchema);
export default SocialMedia;
