// import React, { createContext, useState } from "react";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   // const [user, setUser] = useState(
//   //   JSON.parse(localStorage.getItem("userInfo")) || null
//   // );

//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem("userInfo", JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("userInfo");
//   };

//   return (
//     <AuthContext.Provider value={{user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;


import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");

    return storedUser ? JSON.parse(storedUser) : null;
  });


  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };


  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
