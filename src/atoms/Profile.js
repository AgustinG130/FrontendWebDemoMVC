import React, { useEffect } from "react";

export const Profile = () => {
    
    const user = {
        auth0id: "google-oauth2|114777802518413621858",
        nombre: "Agustin",
        apellido: "Garcia",
        nickname: "agustinaagg07", 
        email: "agustinaagg07@gmail.com",
        imagen_url: "https://lh3.googleusercontent.com/a/ACg8ocLGM8vqbXeWsP7iiOq60HVS4uSdBxQOAjWiN-aPB-Armf61-nQ=s96-c",
        picture: "https://lh3.googleusercontent.com/a/ACg8ocLGM8vqbXeWsP7iiOq60HVS4uSdBxQOAjWiN-aPB-Armf61-nQ=s96-c"
    };
    
    return (
            <div className="profile-details">
                <div className="account-image d-flex justify-content-center img-fluid">
                    <img className="rounded-circle" src={user.picture} alt={user.nickname} />
                </div>
                <div className="account-details text-break">
                    <p>{user.nickname}</p>
                </div>
            </div>
        )
};
