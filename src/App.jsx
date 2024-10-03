import React from 'react';
import { Route, Routes } from "react-router-dom";
import Fixtures from './components/Fixtures/Fixtures';
import Footballschedule from './components/Football/Footballschedule';
import Cricketschedule from './components/Cricket/Cricketschedule';
// import SportSchedule from './components/Sportschedule/SportSchedule';
import Chess from "./components/Chess/Chess.jsx";
import Badminton from "./components/Badminton/Badminton.jsx";
import Basketball from "./components/Basketball/Basketball.jsx";
import Kabaddi from "./components/Kabaddi/Kabaddi.jsx";
import KhoKho from "./components/Kho-Kho/Kho-Kho.jsx";
import LawnTennis from "./components/LawnTennis/LawnTennis.jsx";
import UltimateFrishbee from "./components/Ultimate-Frishbee/Ultimate-Frishbee.jsx";
import Hockey from "./components/Hockey/Hockey.jsx";
import Squash from "./components/Squash/Squash.jsx";
import Volleyball from "./components/Volleyball/Volleyball.jsx";
import TableTennis from "./components/Table-Tennis/Table-Tennis.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* Render Fixtures at the root path */}
        <Route path="/" element={<Fixtures />} />

        {/* Render Footballschedule when the user navigates to /football */}
        <Route path="/football" element={<Footballschedule />} />
        <Route path="/cricket" element={<Cricketschedule />} />
        {/* <Route path="/schedule/:sport" element={<SportSchedule/>} /> */}
        <Route path="/chess" element={<Chess/>}></Route>
        <Route path="/badminton" element={<Badminton/>}></Route>
        <Route path="/basketball" element={<Basketball/>}></Route>
        <Route path="/kabaddi" element={<Kabaddi/>}></Route>
        <Route path="/kho-kho" element={<KhoKho/>}></Route>
        <Route path="/lawn-tennis" element={<LawnTennis/>}></Route>
        <Route path="/ultimate-frishbee" element={<UltimateFrishbee/>}></Route>
        <Route path="/hockey" element={<Hockey/>}></Route>
        <Route path="/squash" element={<Squash/>}></Route>
        <Route path="/volleyball" element={<Volleyball/>}></Route>
        <Route path="/table-tennis" element={<TableTennis/>}></Route>
      </Routes>
    </>
  );
}

export default App;
