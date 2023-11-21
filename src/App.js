import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Celebrities from "./pages/Celebrities";
import CelebrityDetailPage from "./pages/CelebrityDetailPage";
import RandomCelebrity from "./pages/RandomCelebrity";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<CelebrityDetailPage />} />
        <Route path="/celebrities" element={<Celebrities />} />
        <Route path="/random" element={<RandomCelebrity />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
