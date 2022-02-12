import React from "react"
import { useAuth0 } from '@auth0/auth0-react';
import Loader from '../components/Loader';

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0()

    if(isLoading){
        return <div><Loader/></div>
    }
    return (
        isAuthenticated && (
            <div id="profileDiv">
                <img src={user.picture} alt={user.name}/>
                <h2> Hi, {user.name}</h2>
                <p> {user.email}</p>
            </div>
        )
    )
}