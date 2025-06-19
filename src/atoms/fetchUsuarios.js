import { useAuth0 } from "@auth0/auth0-react";

function fetchUsuarios() {

    const {getAccessTokenSilently} = useAuth0();

    async function getUsuarios() {

        const token = await getAccessTokenSilently();
        const response = await fetch('http://localhost:3000/api/usuarios', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log(data);
    }

    return <button onClick={getUsuarios}>Obtener Usuarios</button>
    
}