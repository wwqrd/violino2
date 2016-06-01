import React from 'react';
import NoteName from '../containers/note_name.js';
import MusicalScore from '../containers/musical_score.js';
import FingerPosition from '../containers/finger_position.js';

export default () => (
  <div>
    <h1>Violino</h1>
    <NoteName />
    <MusicalScore />
    <FingerPosition />
  </div>
);
