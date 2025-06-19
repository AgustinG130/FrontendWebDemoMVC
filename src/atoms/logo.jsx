import './logo.css';
import { useNavigate } from "react-router-dom";

export function LogoUcuditt() {
    const navigate = useNavigate();

    const onclickedlogo = () => {
        navigate("/home");
    };

    return (
        <div className="logo-container d-flex justify-content-center align-items-center">
            <img id="logo" src="/ucuditt.png" alt="Ucuditt Logo" className="img-fluid" onClick={onclickedlogo} />
        </div>
    );
}
