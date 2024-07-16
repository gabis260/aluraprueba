import React from 'react';
import Banner from "componentes/banner/banner";
import Titulo from "componentes/Titulo/Titulo";
import Card from "componentes/cards/Card";

function Inicio({ videos }) {
    return (
        <>
            <Banner color="#154580" />
            <Titulo color="#6BD1FF" top="950px" left="6%">
                <h1>FRONT END</h1>
            </Titulo>
            {videos.filter(video => video.categoria === 'Front End').map((video, index) => (
                <Card
                    key={index}
                    linkVideo={video.video}
                    imagen={video.imagen}
                    borderstyle="3px solid #6BD1FF"
                    margin="180px"
                />
            ))}
            <Titulo color="#00C86F" top="1350px" left="6%">
                <h1>BACK END</h1>
            </Titulo>
            {videos.filter(video => video.categoria === 'Back End').map((video, index) => (
                <Card
                    key={index}
                    linkVideo={video.video}
                    imagen={video.imagen}
                    borderstyle="3px solid #00C86F"
                    margin="180px"
                />
            ))}
            <Titulo color="#FFBA05" top="1750px" left="6%">
                <h1>INNOVACIÓN Y GESTIÓN</h1>
            </Titulo>
            {videos.filter(video => video.categoria === 'Innovación y Gestión').map((video, index) => (
                <Card
                    key={index}
                    linkVideo={video.video}
                    imagen={video.imagen}
                    borderstyle="3px solid #FFBA05"
                    margin="200px"
                />
            ))}
        </>
    );
}

export default Inicio;