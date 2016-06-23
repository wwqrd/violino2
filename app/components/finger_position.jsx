import React from 'react';

const width = 180
const height = 260

let renderer,
    ctx;

const setup = (canvas) => {
  ctx = canvas.getContext("2d");
};

const update = (note, showNoteDetails) => {
  ctx.clearRect(0, 0, width, height);
  let colours = {
    inactiveSpot: 'rgb(60, 60, 60)',
    inactiveString: 'rgb(60, 60, 60)',
    activeSpot: 'rgb(240, 60, 60)'
  };
  let gridX = width / 5;
  let gridY = height / 9;
  let fingerSpot = 3;
  let activeFingerSpot = 10;

  for(var row of [1, 3, 5, 6, 8]) {
    ctx.beginPath();
    ctx.lineWidth = Math.round(gridY);
    switch(row) {
      case 1:
        ctx.strokeStyle = 'rgb(0, 0, 0)';
        ctx.lineWidth = 4;
        break;
      case 3:
        ctx.strokeStyle = 'rgb(232, 126, 126)';
        break;
      case 5:
        ctx.strokeStyle = 'rgb(120, 200, 108)';
        break;
      case 6:
        ctx.strokeStyle = 'rgb(136, 136, 222)';
        break;
      case 8:
        ctx.strokeStyle = 'rgb(255, 183, 51)';
        break;
    }
    ctx.moveTo(0, gridY * row);
    ctx.lineTo(width, gridY * row);
    ctx.stroke();
  }

  for(let string = 1; string <= 4; string++) {
    ctx.strokeStyle = colours.inactiveString;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(gridX * string, gridY);
    ctx.lineTo(gridX * string, height);
    ctx.stroke();
  }

  for(let row = 2; row <= 8; row++) {
    for(let string = 1; string <= 4; string++) {
      ctx.fillStyle = colours.inactiveSpot;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(gridX * string, gridY * row, fingerSpot, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  let normalisedNote = note + 2;
  if(normalisedNote <= 28 && showNoteDetails) {
    let string = 1 + Math.floor(normalisedNote / 7);
    let fret = 1 + (normalisedNote % 7);

    if (fret != 1) {
      ctx.fillStyle = colours.activeSpot;
      ctx.beginPath();
      ctx.arc(gridX * string, gridY * fret, activeFingerSpot, 0, 2 * Math.PI);
      ctx.fill();
    }

    ctx.strokeStyle = colours.activeSpot;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(gridX * string, gridY);
    ctx.lineTo(gridX * string, height);
    ctx.stroke();
  }

};

class FingerPosition extends React.Component {

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
      <div className="finger-position">
        <canvas ref="canvas" width={width} height={height}/>
      </div>
    );
  }
}

export default FingerPosition;
