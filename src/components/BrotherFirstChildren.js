// import { userContext } from "../App";
// import { useContext } from "react";
import { useUserContext } from "../context/UserProvider";

const BrotherFirstChildren = () => {
    // const user = useContext(userContext);

    // console.log("user en Brother", user);

    const user = useUserContext();
    console.log("user en Brother", user);

    return (
        <div>
            <h1>BrotherFirstChildren</h1>
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
export default BrotherFirstChildren;
