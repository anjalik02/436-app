import React from 'react';
  
const Brainstorm = () => {
  return (
    <div className='App'>
      <div class="sticky-note">
        <div class="header">
          <span class="title">Song 1</span>
          <span class="close-btn">&times;</span>
        </div>
        <div class="content">
          <p>Song ideas: 120 bpm happy song</p>
        </div>
      </div>
      <div class="sticky-note">
        <div class="header">
          <span class="title">Song 2</span>
          <span class="close-btn">&times;</span>
        </div>
        <div class="content">
          <p>Song ideas: none yet</p>
        </div>
      </div>
    </div>
  );
};
  
export default Brainstorm;