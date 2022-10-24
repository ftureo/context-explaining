// import { userContext } from "../App";
// import { useContext } from "react";
import { useUserContext } from "./context/UserProvider";

const SecondChildren = () => {
    // const user = useContext(userContext);

    // console.log("user en SecondChildren", user);

    const user = useUserContext();
    console.log("user en SecondChildren", user);

    return (
        <div>
            <h1>Second Children</h1>
            {user && (
                <div>
                    <p>{user.name}</p>
                    <p>{user.lastname}</p>
                    <p>{user.age}</p>
                </div>
            )}
        </div>
    );
};
export default SecondChildren;
