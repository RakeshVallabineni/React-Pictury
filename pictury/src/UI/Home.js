import { Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import UserList from "../Components/USERS/userList";
import User from "../Components/USERS/User";

function HomeUI() {
    const [reloadStatus, setReloadStatus] = useState("refresh");

    const Refresh = async () => {
        try {
            setReloadStatus("refreshing");
            const response = await axios.get("https://randomuser.me/api/?results=50");
            localStorage.setItem("users", JSON.stringify(response.data.results));
            setReloadStatus("refresh");


        } catch (error) {
            console.error("Error fetching data:", error);
            setReloadStatus("refresh");
        }

    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Pictury</h1>
                <Button variant="contained" style={{ left: "350px" }} onClick={Refresh}>
                    {reloadStatus === "refreshing" ? <CircularProgress style={{ color: "white" }} size={20} /> : reloadStatus}
                </Button>

            </header>
            <User />
            <UserList reloadStatus={reloadStatus} />

        </div>
    );
}

export default HomeUI;