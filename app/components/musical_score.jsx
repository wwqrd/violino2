import React from 'react';
import vexflow from 'vexflow';

const NOTE_NAMES = 'a a# b c c# d d# e f f# g g#'.split(' ');

const vexflowFormat = (semitones) => {
  let notes = NOTE_NAMES.length;
  let octave = 4 + Math.floor(semitones / notes);
  let noteIndex = semitones % notes;
  if(noteIndex < 0) { noteIndex += notes; }
  let note = NOTE_NAMES[noteIndex];
  return `${note}/${octave}`;
};

let renderer,
    ctx;

class MusicalScore extends React.Component {

  componentDidMount() {
    this.setupVexflow();
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  setupVexflow() {
    renderer = new Vex.Flow.Renderer(this.refs.canvas,
      Vex.Flow.Renderer.Backends.CANVAS);

    ctx = renderer.getContext();
  }

  updateCanvas() {
    ctx.clearRect(0, 0, 300, 300);
    let stave = new Vex.Flow.Stave(10, 0, 200);

    stave.addClef("treble").setContext(ctx).draw();
    // Create the notes
    let notes = [
      // A quarter-note C.
      new Vex.Flow.StaveNote({ keys: [vexflowFormat(this.props.note)], duration: "q" })
    ];

    // Create a voice in 4/4
    let voice = new Vex.Flow.Voice({
      num_beats: 1,
      beat_value: 4,
      resolution: Vex.Flow.RESOLUTION
    });

    // Add notes to voice
    voice.addTickables(notes);

    // Format and justify the notes to 500 pixels
    let formatter = new Vex.Flow.Formatter().
      joinVoices([voice]).format([voice], 200);

    // Render voice
    voice.draw(ctx, stave);
  }

  render() {
    return (
      <canvas ref="canvas" width={300} height={300}/>
    );
  }
}

export default MusicalScore;
