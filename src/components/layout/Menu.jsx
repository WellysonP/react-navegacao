import React from "react";
import './Menu.css'

const Menu = () => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <a href="/home">Início</a>
                    </li>
                    <li>
                        <a href="/about">Sobre</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu