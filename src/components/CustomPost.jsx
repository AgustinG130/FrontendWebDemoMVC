import './CustomPost.css';
import { useState } from "react";
import axios from "axios";

export function CustomPost() {
    const [image, setImage] = useState();
    const [fileName, setFileName] = useState();
    const [isClicked, setIsClicked] = useState(false);
    const [getContent, setContent ] = useState("");
    const [getTitle, setTitle ] = useState("");
    const [getTheme, setTheme] = useState("#");
    const [getPlaceHolder,setPlaceHolder] = useState("¿Algo que quieras compartir?");
    const [getPlaceHolderTitle,setPlaceHolderTitle] = useState("Titulo...");
    const [getPlaceHolderTheme,setPlaceHolderTheme] = useState("#Tema...");
    const today = new Date();
    const [getPosted, setPosted] = useState(false);

    const user = {
        auth0id: "google-oauth2|114777802518413621858",
        nombre: "Agustin",
        apellido: "Garcia",
        nickname: "agustinaagg07", 
        email: "agustinaagg07@gmail.com",
        imagen_url: "https://lh3.googleusercontent.com/a/ACg8ocLGM8vqbXeWsP7iiOq60HVS4uSdBxQOAjWiN-aPB-Armf61-nQ=s96-c",
        picture: "https://lh3.googleusercontent.com/a/ACg8ocLGM8vqbXeWsP7iiOq60HVS4uSdBxQOAjWiN-aPB-Armf61-nQ=s96-c"
    };

    const btnPost = () => {
        if(getPosted){
            alert("¡Ya has enviado el post!");
            return;
        }
        const registerPost = async () => {
            const postData = {
                userCreator: {auth0id: user.auth0id},
                tema: getTheme,
                titulo: getTitle,
                contenido: getContent,
                datePost: `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`,
            };
        
        try {
            setPosted(true);
            await axios.post("http://localhost:8080/api/posts", postData);
            setContent("");
            setPlaceHolder("Post Enviado ✅");
            setPlaceHolderTitle("Post Enviado ✅");
            setPlaceHolderTheme("Post Enviado ✅");
            setTimeout(() => {
                setPlaceHolder("¿Algo que quieras compartir?");
                setPlaceHolderTitle("Titulo...");
                setPlaceHolderTheme("#Tema...");
            }, 3000);
        } catch (error) {
            console.error("Error al subir el post", error);
        }
        window.location.reload();
    };
    registerPost(user);};

    const clickedPost = () => {
        setIsClicked(true);
    };

    // Función para ajustar la altura del textarea
    const typeInput = (e) => {
        e.target.style.height = 'auto'; // Reinicia la altura
        e.target.style.height = `${e.target.scrollHeight}px`; // Ajusta la altura del contenido
    };

    return (
        <div className="custom-post-container mb-23 d-flex flex-column align-items-center">
            <div className="input-container d-flex flex-column align-items-center">
                <input 
                    className="post-theme form-control pb-2 mb-2"
                    placeholder={getPlaceHolderTheme}
                    maxLength={15}
                    rows="1"
                    onChange={(e) => {
                            const value = e.target.value;
                            // Primer caracter sea #
                            if (!value.startsWith("#")) {
                                setTheme("#" + value.replace("#", ""));
                            } else {
                                setTheme(value);
                            }
                        }
                    }
                    value={getTheme}
                    />
                <input 
                    className="post-title form-control pb-2 mt-2 mb-2"
                    placeholder={getPlaceHolderTitle}
                    maxLength={30}
                    rows="1"
                    onChange={(e) => setTitle(e.target.value)}
                    value={getTitle}
                    />
                <textarea
                    onClick={clickedPost}
                    onInput={typeInput}
                    className="form-control"
                    id="custompost"
                    maxLength={255}
                    placeholder={getPlaceHolder}
                    rows="3"
                    onChange={(e) => setContent(e.target.value)}
                    value={getContent}
                />

                {image && (
                    <img
                        src={image}
                        alt="Preview"
                        id="preview-image"
                    />
                )}
                
                {isClicked && (
                    <div className="post-buttons d-flex align-items-center justify-content-center">
                        <button onClick={btnPost} className="btn btn-primary btn-post">Postear</button>
                    </div>
                )}
            </div>
        </div>
    );
}