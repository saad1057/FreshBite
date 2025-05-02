import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', password: '', isAdmin: false });
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', email: '', password: '', isAdmin: false });

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const isAdmin = userInfo && userInfo.isAdmin;
  const token = userInfo && userInfo.token;

  useEffect(() => {
    if (!isAdmin) return;
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get('http://localhost:5000/api/admin/users', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch users');
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://localhost:5000/api/admin/users', form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setForm({ name: '', email: '', password: '', isAdmin: false });
      fetchUsers();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add user');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/admin/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchUsers();
    } catch (err) {
      setError('Failed to delete user');
    }
  };

  const handleEdit = (user) => {
    setEditId(user._id);
    setEditForm({ name: user.name, email: user.email, password: '', isAdmin: user.isAdmin });
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/admin/users/${editId}`, editForm, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEditId(null);
      fetchUsers();
    } catch (err) {
      setError('Failed to update user');
    }
  };

  if (!isAdmin) {
    return <div style={{ padding: '4rem', textAlign: 'center' }}><h2>Access Denied</h2><p>You must be an admin to view this page.</p></div>;
  }

  return (
    <div className="admin-page">
      <div className="admin-content">
        <h1>User Management (Admin Only)</h1>
        {error && <div className="error-message">{error}</div>}
        <h2>Add User</h2>
        <form onSubmit={handleAddUser} className="admin-add-user-form">
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="password" placeholder="Password" type="password" value={form.password} onChange={handleChange} required />
          <label>
            <input type="checkbox" name="isAdmin" checked={form.isAdmin} onChange={handleChange} /> Admin
          </label>
          <button type="submit">Add</button>
        </form>
        <h2>All Users</h2>
        {loading ? <p>Loading...</p> : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user._id}>
                  <td>{editId === user._id ? (
                    <input name="name" value={editForm.name} onChange={handleEditChange} />
                  ) : user.name}</td>
                  <td>{editId === user._id ? (
                    <input name="email" value={editForm.email} onChange={handleEditChange} />
                  ) : user.email}</td>
                  <td>{editId === user._id ? (
                    <input type="checkbox" name="isAdmin" checked={editForm.isAdmin} onChange={handleEditChange} />
                  ) : (user.isAdmin ? 'Yes' : 'No')}</td>
                  <td>
                    {editId === user._id ? (
                      <>
                        <button onClick={handleUpdateUser}>Save</button>
                        <button onClick={() => setEditId(null)}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(user)}>Edit</button>
                        <button onClick={() => handleDelete(user._id)} className="delete-btn">Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Admin; 