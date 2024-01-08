/* eslint-disable */
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tv from "./pages/Tv";
import Celebrity from "./pages/Celebrity";
import NotFound from "./pages/NotFound";
import MovieDetail from "./pages/MovieDetail";
import LoginPage from "./pages/LoginPage";
import TvDetail from "./pages/TvDetail";
import { formToJSON } from "axios";

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
          <Route path="/movie/:title" element={<MovieDetail />} />
          <Route path="/tv/:name" element={<TvDetail />} />
          {/* 추가된 부분 */}
          <Route path="/*" element={<NotFound />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
