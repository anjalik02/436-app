import React,{Component} from 'react';

class Promo extends Component {
 render() {
  return (
    <div className="App">
      <div className="box">
        {/* <h1 style={{ color: 'white', fontSize: '4em' }}>
          Presentation Slides
        </h1> */}
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/oyWZHxj7hys" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
 }
}



export default Promo;