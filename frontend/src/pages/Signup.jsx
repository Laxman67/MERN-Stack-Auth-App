import { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
    course: '',
  });

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post('/auth/signup', form);
      alert('Signup successful');
      navigate('/');
    } catch {
      alert('Signup failed');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <select onChange={(e) => setForm({ ...form, role: e.target.value })}>
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>

      {form.role === 'student' && (
        <input
          placeholder="Course"
          onChange={(e) => setForm({ ...form, course: e.target.value })}
        />
      )}

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
