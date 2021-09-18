import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const MemberDaoSchema = new mongoose.Schema({
  dao: { type: ObjectId, ref: 'Dao' },
  member: { type: ObjectId, ref: 'User' },
});

const MemberDao = mongoose.model('Member', MemberDaoSchema);
export default MemberDao;
