import React, { createContext, useState } from 'react';

interface AuthContextData {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const AuthProvider: React.FC = ({ children}:any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Perform any necessary token validation or decoding here
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const authContextValue: AuthContextData = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
