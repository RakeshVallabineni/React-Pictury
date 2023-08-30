import { Card, CardContent, CardMedia, Typography, } from '@mui/material';
import { Button } from '@mui/material';
import DeleteUser from '../ACTIONS/deleteUser';
import { useState, useEffect, useRef } from "react";


function UserList({ reloadStatus }) {
    const data = localStorage.getItem("users");
    const initialUserList = JSON.parse(data);
    const [userList, setUserList] = useState([...initialUserList]);
    let totalUsers = useRef(JSON.parse(localStorage.getItem('users')).length);

    useEffect(() => {
        setUserList([...initialUserList]);
    }, [initialUserList]);

    const fetchTotalUsers = (data) => {
        totalUsers.current = data
    }

    useEffect(() => {

        if (reloadStatus === "refresh") {
            totalUsers.current = 50
            setUserList([...initialUserList]);
        }

        setUserList([...initialUserList]);
    }, [initialUserList, reloadStatus]);


    return (
        <>
            <Button variant="contained" style={{ left: "150px", marginTop: "-53px", marginLeft: "100px" }} >{totalUsers.current}</Button>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {userList.map((user, index) => (
                    <Card key={index} style={{ width: "300px", marginBottom: "30px" }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={user.picture.large}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {`${user.name.first} ${user.name.last}`}
                            </Typography>
                        </CardContent>
                        <DeleteUser id={user.email} userList={userList} setUserList={setUserList} TotalUsers={fetchTotalUsers} />
                    </Card>
                ))}

            </div>
        </>
    )
}

export default UserList;