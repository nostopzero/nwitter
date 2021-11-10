import { authService } from "fbase";
import { useNavigate } from "react-router";

const Profile = () => {
    const navigate = useNavigate();
    const onLogOutClink = () => {
        authService.signOut();
        navigate("/");
    };

    return (
        <>
            <button onClick={onLogOutClink}>Log Out</button>
        </>
    )
};

export default Profile;