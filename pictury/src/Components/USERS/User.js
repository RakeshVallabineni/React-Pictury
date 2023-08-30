import React, { useEffect } from 'react';
import axios from 'axios';
import UserList from './userList';

function User() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get("https://randomuser.me/api/?results=50");
                if (!localStorage.getItem('users')) {
                    localStorage.setItem('users', JSON.stringify(userResponse.data.results));
                }

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <UserList />
    );
}

export default User;