import { userContext } from "../App";
import { useContext } from "react";

const BrotherFirstChildren = () => {
    const user = useContext(userContext);

    console.log("user en Brother", user);
    return (
        <div>
            <h1>BrotherFirstChildren</h1>
        </div>
    );
};
export default BrotherFirstChildren;
