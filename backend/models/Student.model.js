import mongoose, { Schema, model } from 'mongoose';

const studentSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  email: String,
  course: String,
  enrollmentDate: {
    type: Date,
    default: Date.now,
  },
});

const Student = model('Student', studentSchema);
export default Student;
