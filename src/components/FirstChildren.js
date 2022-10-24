import { userContext } from "../App";
import { useContext } from "react";
import SecondChildren from "./SecondChildren";

const FirstChildren = () => {
    const user = useContext(userContext);

    console.log("user", user);
    return (
        <div>
            <h1>First Children</h1>
            {user && <h2>{user.name}</h2>}
            <SecondChildren />
        </div>
    );
};
export default FirstChildren;
