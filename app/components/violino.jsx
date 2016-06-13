import React from 'react';
import NoteName from '../containers/note_name.js';
import MusicalScore from '../containers/musical_score.js';
import FingerPosition from '../containers/finger_position.js';

import '../../stylesheets/components/violino.sass';

export default () => (
  <div className="violino">
    <h1 className="violino__title">Violino</h1>
    <NoteName />
    <MusicalScore />
    <FingerPosition />
  </div>
);
