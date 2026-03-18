import React, { useState, useEffect } from "react";


const Buscador = (Home, Search) => {
    return (
        <ul>
            <a href="./">
                <li>
                    <Home  />
                    <p id="search-text" >Inicio</p>
                </li>
        </a>
        <a>
            <li id="search-li">
                <Search />
                <p id="search-text-search" >Buscar</p>
                <input id="search-input" type="search" placeholder="Buscar" />
            </li>
        </a>
        </ul>
    )
}

export default Buscador;