// import { userContext } from "../App";
// import { useContext } from "react";
import SecondChildren from "./SecondChildren";
import { useUserContext, useUserToggleContext } from "../context/UserProvider";

const FirstChildren = () => {
    const user = useUserContext();
    // const user = useContext(userContext)
    const toggleUser = useUserToggleContext();
    console.log("user en FirstChildren", user);

    return (
        <div>
            <h1>First Children</h1>
            <button onClick={toggleUser}>Change User</button>
            <SecondChildren />
        </div>
    );
};
export default FirstChildren;
