import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
export default function Board() {
  return (
  <div>
    <div>
       <button className="board-row">1</button>
       <button className="board-row">2</button>
       <button className="board-row">3</button>
    </div>
    <div>
       <button className="board-row">4</button>
       <button className="board-row">5</button>
       <button className="board-row">6</button>
    </div>
    <div>
       <button className="board-row">7</button>
       <button className="board-row">8</button>
       <button className="board-row">9</button>
    </div>
  </div>  
  
  );
}
