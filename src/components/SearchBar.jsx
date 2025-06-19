import "./SearchBar.css";
import { LogoUcuditt } from '../atoms/logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SearchBar() {

  const [searchtext, setsearchtext] = useState("");
  const navigate = useNavigate();

  const clickedSearch = () => {
      navigate(`/search/${searchtext}`); // Cambia la ruta para que incluya la busqueda
  };

  return (
    <div className="background-bar">
      <div className="d-flex justify-content-center align-items-center search-bar-container">
        <div className="logo-ucuditt-container d-flex justify-content-center">
          <LogoUcuditt />
        </div>
        <div className="input-group flex-nowrap search-bar w-100">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search" 
            aria-label="Search" 
            aria-describedby="addon-wrapping"
            onChange={(e) => setsearchtext(e.target.value)}
            value={searchtext}
          />
          <button className="input-group-text btn btn-primary" id="addon-wrapping" onClick={clickedSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
      </div>
    </div>
  );
}
