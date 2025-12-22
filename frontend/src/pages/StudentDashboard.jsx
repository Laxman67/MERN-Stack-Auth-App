import { useEffect, useState, useContext } from 'react';
import axios from '../api/axios';
import { AuthContext } from '../context/AuthContext';

export default function StudentDashboard() {
  const [profile, setProfile] = useState({});
  const { logout } = useContext(AuthContext);

  const getProfile = async () => {
    const res = await axios.get('/students/me/profile');
    setProfile(res.data);
  };

  const updateProfile = async () => {
    await axios.put('/students/me/profile', profile);
    alert('Profile updated');
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <h2>Student Dashboard</h2>
      <button onClick={logout}>Logout</button>

      <input
        value={profile.name || ''}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
      />
      <input
        value={profile.course || ''}
        onChange={(e) => setProfile({ ...profile, course: e.target.value })}
      />

      <button onClick={updateProfile}>Update</button>
    </div>
  );
}
