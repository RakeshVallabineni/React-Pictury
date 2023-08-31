import React from "react";
import axios from "axios";
import UserList from "./userList";
import { Button, CircularProgress } from "@mui/material";
import { useState } from "react";
function User() {
  const [reloadStatus, setReloadStatus] = useState("refresh");
  const Refresh = async () => {
    try {
      setReloadStatus("refreshing");
      const response = await axios.get("https://randomuser.me/api/?results=50");
      localStorage.setItem("users", JSON.stringify(response.data.results));
      setReloadStatus("refreshed");
    } catch (error) {
      console.error(error);
    }
  };
  const fetchData = async () => {
    try {
      const userResponse = await axios.get(
        "https://randomuser.me/api/?results=50"
      );
      if (
        !localStorage.getItem("users") ||
        localStorage.getItem("users") === "[]"
      ) {
        localStorage.setItem(
          "users",
          JSON.stringify(userResponse.data.results)
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();

  return (
    <>
      <Button
        variant="contained"
        style={{
          backgroundColor: "black",
          left: "350px",
          marginTop: "-53px",
          width: "100px",
        }}
        onClick={Refresh}
      >
        {reloadStatus === "refreshing" ? (
          <CircularProgress style={{ color: "white" }} size={20} />
        ) : (
          reloadStatus
        )}
      </Button>
      <UserList reloadUsers={reloadStatus} userStatus={setReloadStatus} />
    </>
  );
}

export default User;
