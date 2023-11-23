import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Celebrities from "./pages/Celebrities";
import CelebrityDetailPage from "./pages/CelebrityDetailPage";
import RandomCelebrity from "./pages/RandomCelebrity";
import TvSpeakersPages from "./pages/TvSpeakersPage";
import CopyrightPage from "./pages/CopyrightPage";
import FormMessagePage from "./pages/FormMessagePage";
import LikesPages from "./pages/LikesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<CelebrityDetailPage />} />
        <Route path="/celebrities/:id" element={<Celebrities />} />
        <Route path="/random" element={<RandomCelebrity />} />
        <Route path="/tvspeakers" element={<TvSpeakersPages />} />
        <Route path="/copyright" element={<CopyrightPage />} />
        <Route path="/form" element={<FormMessagePage />} />
        <Route path="/likes" element={<LikesPages />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
