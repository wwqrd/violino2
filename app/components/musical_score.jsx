import React from 'react';
import Vex from 'vexflow';
import '../../stylesheets/components/musical_score.sass';

const NOTE_NAMES = 'a a# b c c# d d# e f f# g g#'.split(' ');

const vexflowFormat = (semitones) => {
  let notes = NOTE_NAMES.length;
  let octave = 4 + Math.floor(semitones / notes);
  let noteIndex = semitones % notes;
  if(noteIndex < 0) { noteIndex += notes; }
  let note = NOTE_NAMES[noteIndex];
  return `${note}/${octave}`;
};

const width = 300
const height = 175

let renderer,
    ctx;

const setup = (canvas) => {
  renderer = new Vex.Flow.Renderer(canvas,
    Vex.Flow.Renderer.Backends.CANVAS);

  ctx = renderer.getContext();
};

const update = (note, showNoteDetails) => {
  clear();
  let stave = new Vex.Flow.Stave(10, 50, width-20);

  stave.addClef("treble").setContext(ctx).draw();

  // Draw note
  let vNote = new Vex.Flow.StaveNote({ keys: [vexflowFormat(note)], duration: "q" })
  if(/\#/.test(vexflowFormat(note))) {
    vNote.addAccidental(0, new Vex.Flow.Accidental("#"));
  }

  // Create a voice in 4/4
  let voice = new Vex.Flow.Voice({
    num_beats: 1,
    beat_value: 4,
    resolution: Vex.Flow.RESOLUTION
  });

  // Add notes to voice
  voice.addTickables([vNote]);

  // Format and justify the notes to 500 pixels
  let formatter = new Vex.Flow.Formatter().
    joinVoices([voice]).format([voice], width);

  // Render voice
  voice.draw(ctx, stave);
};

const clear = () => {
  ctx.clearRect(0, 0, width, height);
};

class MusicalScore extends React.Component {

  componentDidMount() {
    setup(this.refs.canvas);
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    update(this.props.note, this.props.showNoteDetails);
  }

  render() {
    return (
      <div className="musical-score">
        <canvas ref="canvas" width={width} height={height}/>
      </div>
    );
  }
}

export default MusicalScore;
