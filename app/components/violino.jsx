import React from 'react';
import NoteName from './note_name.jsx';
import MusicalScore from './musical_score.jsx';
import FingerPosition from './finger_position.jsx';

class Violino extends React.Component {
  render() {
    return (
      <div>
        <h1>Violino</h1>
        <NoteName />
        <MusicalScore />
        <FingerPosition />
      </div>
    );
  }
}

export default Violino;
