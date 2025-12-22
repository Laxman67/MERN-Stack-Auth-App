import { useEffect, useState, useContext } from 'react';
import axios from '../api/axios';
import { AuthContext } from '../context/AuthContext';

export default function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const { logout } = useContext(AuthContext);

  const fetchStudents = async () => {
    const res = await axios.get('/students');
    setStudents(res.data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`/students/${id}`);
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={logout}>Logout</button>

      {students.map((s) => (
        <div key={s._id}>
          <p>
            {s.name} - {s.course}
          </p>
          <button onClick={() => deleteStudent(s._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
