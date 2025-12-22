import express from 'express';
const studentRouter = express.Router();
import auth from '../middlewares/auth.middleware.js';
import isAdmin from '../middlewares/role.middleware.js';

import {
  getAllStudents,
  addStudent,
  updateStudent,
  deleteStudent,
  getMyProfile,
  updateMyProfile,
} from '../controllers/student.controller.js';

// Admin
studentRouter.get('/', auth, isAdmin, getAllStudents);
studentRouter.post('/', auth, isAdmin, addStudent);
studentRouter.put('/:id', auth, isAdmin, updateStudent);
studentRouter.delete('/:id', auth, isAdmin, deleteStudent);

// Student
studentRouter.get('/me/profile', auth, getMyProfile);
studentRouter.put('/me/profile', auth, updateMyProfile);

export default studentRouter;
