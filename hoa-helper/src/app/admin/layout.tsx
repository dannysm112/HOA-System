import React from 'react';

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (
        <div className="admin-layout">
            <header className="admin-header">
                <h1>Admin Panel</h1>
            </header>
            <nav className="admin-nav">
                <ul>
                    <li><a href="/admin/dashboard">Dashboard</a></li>
                    <li><a href="/admin/users">Users</a></li>
                    <li><a href="/admin/settings">Settings</a></li>
                </ul>
            </nav>
            <main className="admin-content">
                {children}
            </main>
            <footer className="admin-footer">
                <p>&copy; 2024 Property Manager. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AdminLayout;