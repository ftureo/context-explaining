import { userContext } from "../App";
import { useContext } from "react";

const SecondChildren = () => {
    const user = useContext(userContext);

    console.log("user en SecondChildren", user);

    return (
        <div>
            <h1>Second Children</h1>
            {user && <h2>{user.name}</h2>}
        </div>
    );
};
export default SecondChildren;
