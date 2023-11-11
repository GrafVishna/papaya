import Home from "./Pages/Home/Home.jsx";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Shorts from "./Pages/Shorts/Shorts.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import Subscriptions from "./Pages/Subscriptions/Subscriptions.jsx";
import Music from "./Pages/Music/Music.jsx";

function App() {
  return (
    <>
      {/*<Home />*/}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shorts" element={<Shorts />} />
          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="music" element={<Music />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
