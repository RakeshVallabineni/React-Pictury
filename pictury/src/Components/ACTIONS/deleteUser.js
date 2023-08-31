import { Button } from "@mui/material";

function DeleteUser({ id, userList, setUserList, TotalUsers }) {

    const handleDeleteUser = () => {
        const updatedUserList = userList.filter((user) => user.email !== id);
        setUserList(updatedUserList);
        localStorage.setItem("users", JSON.stringify(updatedUserList));
        console.log(id)
        TotalUsers(JSON.parse(localStorage.getItem('users')).length+1 - 1)
    }

    return (
        <Button variant='contained' style={{ backgroundColor: "black", borderRadius: "20px", height: "55px", width: "300px" }} onClick={handleDeleteUser}>
            <p>Delete</p>
        </Button>
    )
}

export default DeleteUser;