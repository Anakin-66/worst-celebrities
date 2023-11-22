import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Celebrities from "./pages/Celebrities";
import CelebrityDetailPage from "./pages/CelebrityDetailPage";
import RandomCelebrity from "./pages/RandomCelebrity";
import TvSpeakersPages from "./pages/TvSpeakersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<CelebrityDetailPage />} />
        <Route path="/celebrities/:id" element={<Celebrities />} />
        <Route path="/random" element={<RandomCelebrity />} />
        <Route path="/tvspeakers" element={<TvSpeakersPages />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
