import Student from '../models/Student.model.js';

// Admin
export const getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

export const addStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json(student);
};

export const updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(student);
};

export const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Student deleted' });
};

// Student
export const getMyProfile = async (req, res) => {
  const student = await Student.findOne({ userId: req.user.id });
  res.json(student);
};

export const updateMyProfile = async (req, res) => {
  const student = await Student.findOneAndUpdate(
    { userId: req.user.id },
    req.body,
    { new: true }
  );
  res.json(student);
};
