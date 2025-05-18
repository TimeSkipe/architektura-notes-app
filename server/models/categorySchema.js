import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#D8D8D8',
  },
}, { timestamps: true });

export default mongoose.models.Category || mongoose.model('Category', CategorySchema);