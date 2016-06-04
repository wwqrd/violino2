import React, { PropTypes } from 'react'

const NOTE_NAMES = 'A,A# (Bb),B,C,C# (Db),D,D# (Eb),E,F,F# (Gb),G,G# (Ab)'.split(',');

const nameOfNote = (semitones) => {
  let notes = NOTE_NAMES.length;
  let octave = 4 + Math.floor(semitones / notes);
  let noteIndex = semitones % notes;
  if(noteIndex < 0) { noteIndex += notes; }
  let note = NOTE_NAMES[noteIndex];
  return `${note} / ${octave}`;
};

const NoteName = ({ note, showNoteDetails }) => (
  <div>
    <h1>{ showNoteDetails ? nameOfNote(note) : '' }</h1>
  </div>
);

NoteName.propTypes = {
  note: PropTypes.number.isRequired
}

export default NoteName;
