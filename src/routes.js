import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cabecera from './componentes/Cabecera/Cabecera';
import Pie from './componentes/Pie/Pie';
import Inicio from './pages/inicio/Inicio';
import NuevoVideo from './pages/NuevoVideo/NuevoVideo';

function AppRoutes() {
    const [videos, setVideos] = useState([]);

    const agregarVideo = (video) => {
        setVideos([...videos, video]);
    };

    return (
        <BrowserRouter>
            <Cabecera />
            <Routes>
                <Route path="/" element={<Inicio videos={videos} />} />
                <Route path="/NuevoVideo" element={<NuevoVideo agregarVideo={agregarVideo} />} />
            </Routes>
            <Pie />
        </BrowserRouter>
    );
}

export default AppRoutes;
