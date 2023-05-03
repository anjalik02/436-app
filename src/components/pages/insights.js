import React from 'react';
  
const Insights = () => {
  return (
    <div className="App">
      <div className="box">
        <div style={{ color: 'white', fontSize: '4em' }}>
          Key Insights from Peer Feedback
        </div>
          <p style={{ textAlign: 'left', color: 'white', fontSize: '1.5em' }}>
            &#x2022; The biggest criticism that the project received was that people aren't sure about the scope of this and whether it's a significant enough problem. We thought about this and realized there there is definitley scope to make this larger - for example, moving past just song lyrics and going to articles that people can print out, or something like that in order to increase its scope for people with visual impairments.
          </p>
          <p style={{ textAlign: 'left', color: 'white', fontSize: '1.5em' }}>
            &#x2022; Another piece of key feedback is that people weren't sure how this provides additional value for people who have visual impairments. That is, chances are that they already have a text-to-speech converter which would make this "useless" or they don't have one and there's no way to access this Chrome extension. While we think this is valid criticism, we also think that because we target musicians, it provides unique value for musicians with visual impairments that may want to learn a song away from their computer or if they'd like the lyrics for karaoke. You can't really sing along to a song if there's text to speech going on in the background. We target this to people who do use screen readers, since there's no way for people with visual impairments to access a computer otherwise anyway. 
          </p>
          <p style={{ textAlign: 'left', color: 'white', fontSize: '1.5em' }}>
            &#x2022; People thought that this was a cool idea, but there was a lot of confusion around what people with visual impairments can do with a text file. We believe that people who have visual impairments likely have some kind of Braille printer and would utilize this for their lyrics needs.
          </p>
      </div>
    </div>
  );
};
  
export default Insights;