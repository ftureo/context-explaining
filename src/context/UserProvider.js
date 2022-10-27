import React, { useState } from "react";

const userContext = React.createContext();
const userToggleContext = React.createContext();

export const useUserContext = () => {
    return React.useContext(userContext);
};
export const useUserToggleContext = () => React.useContext(userToggleContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const toggleUser = () => {
        user
            ? setUser(null)
            : setUser({
                  name: "Jhon",
                  lastname: "Doe",
                  age: 30,
                  email: "johndoe@mail.com",
              });
    };

    return (
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={toggleUser}>
                {children}
            </userToggleContext.Provider>
        </userContext.Provider>
    );
};
