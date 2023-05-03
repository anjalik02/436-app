import React from 'react';
  
const Conclusions = () => {
  return (
    <div className="App">
      <div className="box">
        <div style={{ color: 'white', fontSize: '4em' }}>
          Conclusion and Future Work
        </div>
          <p style={{ textAlign: 'left', color: 'white', fontSize: '1.5em' }}>
            We believe that we have something that's really niche and helps people with visual impairments. Since there is nothing else like this on the market, we believe that KAHA Music can help people with visual impairments get started and continue music as a hobby. The following is a list of future improvements that we would make to this project.
          </p>
          <p style={{ marginLeft: '25px', textAlign: 'left',color: 'white', fontSize: '1.5em' }}>
            &#x2022; Make it such that it downloads the lyrics as a .brf file, which is more useful for Braille printers
          </p>
          <p style={{ marginLeft: '25px', textAlign: 'left',color: 'white', fontSize: '1.5em' }}>
            &#x2022; Expand to support lyrics that show up in a google search 
          </p>
          <p style={{ marginLeft: '25px', textAlign: 'left',color: 'white', fontSize: '1.5em' }}>
            &#x2022; Have a voice input feature where a user can simply say what song they'd like the lyrics for and the extension would automatically find the song and download the file. 
          </p>
      </div>
    </div>
  );
};
  
export default Conclusions;