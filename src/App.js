import { MainPage } from "./pages/Main";
import { SearchBar } from "./components/SearchBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchPost } from "./pages/SearchPost";

function App() {

  return (
    <div id="app-container">
        <BrowserRouter>
        <SearchBar/>
          <Routes>
            <Route path="/" element={< MainPage />} />
            <Route path="/home" element={< MainPage />} />
            <Route path="/search/:searchtext" element={<SearchPost />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;