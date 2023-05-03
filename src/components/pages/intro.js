import React from "react";

const Intro = () => {
  return (
    <div className="App">
      <div className="box">
        <div style={{ color: 'white', fontSize: '4em' }}>
          Introduction and Motivation
        </div>
        <p style={{ color: 'white', fontSize: '1.5em' }}>
        We found that musician's block was a recurring problem for most people, occurring almost every other time they tried to write music. 
        More importantly, however, a few participants in our needfinding study with blindness/visual impairments discussed the lack of seamless braille translators in their own song writing endeavors, requiring them to rely on speech-readers to refer back to their own lyrics. 
        This inspired us to modify our initial project to one that translates lyrics to braille for not only musicians, but music listeners as well.

        </p>
      </div>
    </div>
  );
};


export default Intro;
