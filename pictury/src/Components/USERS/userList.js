import { Card, CardContent, CardMedia, Typography, } from '@mui/material';
import { Button } from '@mui/material';
import DeleteUser from '../ACTIONS/deleteUser';
import { useState, useRef } from "react";


function UserList({ reloadUsers, userStatus }) {
    const data = localStorage.getItem("users");
    const initialUserList = JSON.parse(data);
    const [userList, setUserList] = useState(JSON.parse(data));
    let totalUsers = useRef(JSON.parse(localStorage.getItem('users')).length);
    let reloadTotalUsers = useRef(0)

    if (reloadUsers === "refreshed") {
        reloadTotalUsers.current = 50
        userStatus("refresh")
    }
    const fetchTotalUsers = (data) => {
        totalUsers.current = data
        reloadTotalUsers.current = 0
    }

    return (
        <>
            <Button variant="contained" style={{ left: "150px", marginTop: "-53px", marginLeft: "100px", backgroundColor:"black" }} >{reloadTotalUsers.current === 50 ? 50 : totalUsers.current}</Button>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {userList.map((user, index) => (
                    <Card key={index} style={{ width: "300px", marginBottom: "30px", borderRadius:"25px" }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={user.picture.large}
                            style={{borderRadius:"25px"}}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {`${user.name.first} ${user.name.last}`}
                            </Typography>
                        </CardContent>
                        <DeleteUser id={user.email} userList={initialUserList} setUserList={setUserList} TotalUsers={fetchTotalUsers} />
                    </Card>
                ))}

            </div>
        </>
    )
}

export default UserList;