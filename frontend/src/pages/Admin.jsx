import React from 'react';
import Header from '../components/Header';
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
                    <li><a href="#manage-users">Manage Users</a></li>
                    <li><a href="#manage-cars">Manage Cars</a></li>
                    <li><a href="#view-reports">View Reports</a></li>
                    <li><a href="#settings">Settings</a></li>
                </ul>
            </nav>
            <main className="admin-main">
                <section id="manage-users" className="admin-section">
                    <h2>Manage Users</h2>
                    <p>Details about managing users will be shown here.</p>
                </section>
                <section id="manage-cars" className="admin-section">
                    <h2>Manage Cars</h2>
                    <p>Details about managing cars will be shown here.</p>
                </section>
                <section id="view-reports" className="admin-section">
                    <h2>View Reports</h2>
                    <p>Details about viewing reports will be shown here.</p>
                </section>
                <section id="settings" className="admin-section">
                    <h2>Settings</h2>
                    <p>Settings options will be shown here.</p>
                </section>
            </main>
        </div>
    );
};

export default Admin;
