import React from 'react';
import './Game.css';
import Jeu from './Jeu.js'

function Game() {
  return (
    <div className="Game">
      <section className="Game-header">
        <h1>Jeu de cartes</h1>
        <h3>
          Jeu de cartes codé sous REACT
        </h3>
        <Jeu />
      </section>

    </div>
  );
}

export default Game;
