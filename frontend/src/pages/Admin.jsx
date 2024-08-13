import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import AdminBlogManagement from './AdminBlogManagement';
import '../styles/Admin.css';

const Admin = () => {
    return (
        <div className="admin-container">
            <Header />
            <div className="admin-horizontal-bar">
                Admin Dashboard
            </div>
            <nav className="admin-sidebar">
                <ul>
                    <li><Link to="/admin/manage-users">Manage Users</Link></li>
                    <li><Link to="/admin/manage-cars">Manage Cars</Link></li>
                    <li><Link to="/admin/manage-blogs">Manage Blogs</Link></li>
                    <li><Link to="/admin/view-reports">View Reports</Link></li>
                    <li><Link to="/admin/settings">Settings</Link></li>
                </ul>
            </nav>
            <main className="admin-main">
                <Routes>
                    <Route path="manage-users" element={
                        <section id="manage-users" className="admin-section">
                            <h2>Manage Users</h2>
                            <p>Details about managing users will be shown here.</p>
                        </section>
                    } />
                    <Route path="manage-cars" element={
                        <section id="manage-cars" className="admin-section">
                            <h2>Manage Cars</h2>
                            <p>Details about managing cars will be shown here.</p>
                        </section>
                    } />
                    <Route path="manage-blogs" element={<AdminBlogManagement />} />
                    <Route path="view-reports" element={
                        <section id="view-reports" className="admin-section">
                            <h2>View Reports</h2>
                            <p>Details about viewing reports will be shown here.</p>
                        </section>
                    } />
                    <Route path="settings" element={
                        <section id="settings" className="admin-section">
                            <h2>Settings</h2>
                            <p>Settings options will be shown here.</p>
                        </section>
                    } />
                </Routes>
            </main>
        </div>
    );
};

export default Admin;
