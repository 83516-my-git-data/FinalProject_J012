import React, { createContext, useContext, useState } from 'react';

// Create a context for authentication
const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState('');

    // Set authentication state
    const login = (role) => {
        setIsAuthenticated(true);
        setUserRole(role);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserRole('');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
