import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../movie_site/src/components/Header";
import Home from "../../movie_site/src/pages/Home";
import Movies from "../../movie_site/src/pages/Movies";
import Tv from "../../movie_site/src/pages/Tv";
import Celebrity from "../../movie_site/src/pages/Celebrity";
import NotFound from "../../movie_site/src/pages/NotFound";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
