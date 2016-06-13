import React, { PropTypes } from 'react';
import '../../stylesheets/components/note_name.sass';

const NOTE_NAMES = 'A,A# (Bb),B,C,C# (Db),D,D# (Eb),E,F,F# (Gb),G,G# (Ab)'.split(',');

const nameOfNote = (semitones) => {
  let notes = NOTE_NAMES.length;
  let noteIndex = semitones % notes;
  if(noteIndex < 0) { noteIndex += notes; }
  let note = NOTE_NAMES[noteIndex];
  return note;
};

const octave = (semitones) => {
  let notes = NOTE_NAMES.length;
  let octave = 4 + Math.floor(semitones / notes);
  return octave;
};

const noteDetails = (note, showNoteDetails) => {
  if (!showNoteDetails) return '';

  return <div className="note-name__note">{nameOfNote(note)} <div className="note-name__octave">/ {octave(note)}</div></div>
};

const NoteName = ({ note, showNoteDetails }) => (
  <div className="note-name">
    { noteDetails(note, showNoteDetails) }
  </div>
);

NoteName.propTypes = {
  note: PropTypes.number.isRequired
}

export default NoteName;
