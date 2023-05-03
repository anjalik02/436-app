import React from 'react';
  
const Slides = () => {
  return (
    <div className="App">
      <div className="box">
        {/* <h1 style={{ color: 'white', fontSize: '4em' }}>
          Presentation Slides
        </h1> */}
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTaHYpSGY6JUnLv0umbfuNEpmqB2yvJs7Fka977M3Xzdm2OY0VRYRf5lKbQF25LHBeR_1DpYwq-U7WB/embed?start=false&loop=false&delayms=5000" frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>
    </div>
  );
};
  
export default Slides;