import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState({ name: '', lastName: '', email: '', profilePic: '', _id: '' });
  const [editPersonal, setEditPersonal] = useState(false);
  const [editPassword, setEditPassword] = useState(false);
  const [form, setForm] = useState({ name: '', lastName: '', email: '' });
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo) {
      setUser(userInfo);
      setForm({ name: userInfo.name, lastName: userInfo.lastName || '', email: userInfo.email });
    }
  }, []);

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  const token = userInfo?.token;

  const handlePersonalChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePersonalSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const { data } = await axios.put(
        'http://localhost:5000/api/profile',
        {
          name: form.name,
          lastName: form.lastName,
          email: form.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSuccess('Profile updated!');
      const oldUserInfo = JSON.parse(localStorage.getItem('userInfo'));
      const newUserInfo = { ...oldUserInfo, ...data };
      setUser(newUserInfo);
      localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
      setEditPersonal(false);
    } catch (err) {
      setError('Could not update profile.');
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');
    if (passwords.new !== passwords.confirm) {
      setPasswordError('New password and confirm password do not match.');
      return;
    }
    try {
      const { data } = await axios.put(
        'http://localhost:5000/api/profile',
        {
          currentPassword: passwords.current,
          newPassword: passwords.new,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPasswordSuccess(data.message || 'Password updated!');
      setPasswords({ current: '', new: '', confirm: '' });
      setTimeout(() => {
        setEditPassword(false);
        setPasswordSuccess('');
      }, 1500);
    } catch (err) {
      setPasswordError(
        err.response?.data?.message || 'Could not update password.'
      );
    }
  };

  return (
    <div className="profile-outer-bg">
      <div className="profile-layout">
        <button className="back-arrow-btn" onClick={() => navigate(-1)} title="Go back">←</button>
        <aside className="profile-sidebar">
          <div className="sidebar-item active">
            <span className="sidebar-icon">👤</span> Account Info
          </div>
        </aside>
        <main className="profile-main">
          <h1 className="profile-title">Account Info</h1>
          <section className="profile-section">
            <div className="profile-section-header">
              <h2>Personal info</h2>
              <button className="edit-btn" onClick={() => setEditPersonal(!editPersonal)}>
                {editPersonal ? 'Cancel' : 'Edit'}
              </button>
            </div>
            {!editPersonal ? (
              <div className="profile-info">
                <b>{user.name}</b>
                <div>Email: {user.email}</div>
                <div>Customer ID: {user._id}</div>
              </div>
            ) : (
              <form className="profile-form" onSubmit={handlePersonalSubmit}>
                <div className="profile-form-grid">
                  <div className="profile-form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handlePersonalChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="profile-form-group">
                    <label htmlFor="lastName">Last name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={handlePersonalChange}
                      placeholder="Last name"
                      required
                    />
                  </div>
                  <div className="profile-form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handlePersonalChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="profile-form-group">
                    <label htmlFor="dob">Date of birth</label>
                    <input
                      type="text"
                      id="dob"
                      name="dob"
                      placeholder="Date of birth"
                      disabled
                    />
                  </div>
                </div>
                <div className="profile-form-actions">
                  <button type="button" className="cancel-button" onClick={() => setEditPersonal(false)}>Cancel</button>
                  <button type="submit" className="primary1-button">Save</button>
                </div>
                {success && <div className="profile-success">{success}</div>}
                {error && <div className="profile-error">{error}</div>}
              </form>
            )}
            {!editPersonal && (
              <>
                {success && <div className="profile-success">{success}</div>}
                {error && <div className="profile-error">{error}</div>}
              </>
            )}
          </section>

          <section className="profile-section">
            <div className="profile-section-header">
              <h2>Password</h2>
              <button className="edit-btn" onClick={() => setEditPassword(!editPassword)}>
                {editPassword ? 'Cancel' : 'Edit'}
              </button>
            </div>
            {!editPassword ? (
              <div>Current password: ••••••••</div>
            ) : (
              <form className="profile-form" onSubmit={handlePasswordSubmit}>
                <input
                  type="password"
                  name="current"
                  value={passwords.current}
                  onChange={e => setPasswords({ ...passwords, current: e.target.value })}
                  placeholder="Current password"
                  required
                />
                <input
                  type="password"
                  name="new"
                  value={passwords.new}
                  onChange={e => setPasswords({ ...passwords, new: e.target.value })}
                  placeholder="New password"
                  required
                />
                <input
                  type="password"
                  name="confirm"
                  value={passwords.confirm}
                  onChange={e => setPasswords({ ...passwords, confirm: e.target.value })}
                  placeholder="Confirm new password"
                  required
                />
                <button type="submit" className="primary1-button">Change Password</button>
                {passwordSuccess && <div className="profile-success">{passwordSuccess}</div>}
                {passwordError && <div className="profile-error">{passwordError}</div>}
              </form>
            )}
          </section>

          <section className="profile-section">
            <div className="profile-section-header">
              <h2>Your credit</h2>
            </div>
            <div>You have $0 FreshBite credit at the moment</div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Profile;
