import React, { useState } from "react";
import BrotherFirstChildren from "./components/BrotherFirstChildren";

import FirstChildren from "./components/FirstChildren";

export const userContext = React.createContext();

const App = () => {
    // console.log("userContext", userContext);

    const [user, setUser] = useState(null);

    const toggleUser = () => {
        if (user) {
            setUser(null);
        } else {
            setUser({
                name: "Jane",
                lastname: "Doe",
                age: 30,
                email: "johndoe@mail.com",
            });
        }
    };

    return (
        <userContext.Provider value={user}>
            <div className="App">
                <h1>React Context</h1>
                <button onClick={toggleUser}>Change User</button>
                <FirstChildren />
                <BrotherFirstChildren />
            </div>
        </userContext.Provider>
    );
};

export default App;
