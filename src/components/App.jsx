import Home from "./Pages/Home/Home.jsx";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Shorts from "./Pages/Shorts/Shorts.jsx";
import MainLayout from "./Layouts/MainLayout.jsx";
import Subscriptions from "./Pages/Subscriptions/Subscriptions.jsx";
import Music from "./Pages/Music/Music.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import PageWrapper from "./Wrappers/PageWrapper.jsx";
import VideoLayout from "./Layouts/VideoLayout.jsx";
import Video from "./Pages/Video/Video.jsx";
import MyModal from "./modals/AuthPopup/AuthPopup.jsx";
import { SingOutPopup } from "./modals/SingOutPopup/SingOutPopup.jsx";
import { Profile } from "./Pages/Profile/Profile.jsx";
import { ProfileLayout } from "./Layouts/ProfileLayout.jsx";

// w
function App() {
  return (
    <>
      <PageWrapper>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="shorts" element={<Shorts />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="music" element={<Music />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/video/:videoId" element={<VideoLayout />}>
            <Route index element={<Video />} />
          </Route>
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
          </Route>
        </Routes>
      </PageWrapper>
      <MyModal />
      <SingOutPopup />
    </>
  );
}

export default App;
