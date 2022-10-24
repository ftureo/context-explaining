import React from "react";
import BrotherFirstChildren from "./components/BrotherFirstChildren";
import { UserProvider } from "./components/context/UserProvider";

import FirstChildren from "./components/FirstChildren";

export const userContext = React.createContext();

const App = () => {
    // console.log("userContext", userContext);
    // const [user, setUser] = useState(null);

    // const toggleUser = () => {
    //    if (user) {
    //        setUser(null);
    //    } else {
    //        setUser({
    //            name: "Jhon",
    //            lastname: "Doe",
    //            age: 30,
    //            email: "johndoe@mail.com",
    //        });
    //    }
    //     user
    //         ? setUser(null)
    //         : setUser({
    //               name: "Jhon",
    //               lastname: "Doe",
    //               age: 30,
    //               email: "johndoe@mail.com",
    //           });
    // };

    return (
        <UserProvider>
            {/* // <userContext.Provider value={user}> */}
            <div className="App">
                <h1>React Context</h1>
                {/* <button onClick={toggleUser}>Change User</button> */}
                <FirstChildren />
                <BrotherFirstChildren />
            </div>
            {/* // </userContext.Provider> */}
        </UserProvider>
    );
};

export default App;
