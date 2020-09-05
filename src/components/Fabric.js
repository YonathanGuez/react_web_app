import { fabric } from 'fabric';
import React, { Component } from 'react';
import './Fabric.css';

//yarn add fabric

export class Fabric extends Component {
  state = {
    canvas: this.canvas,
  };
  componentDidMount() {
    this.state.canvas = new fabric.Canvas('canvas');
  }
  Addtext() {
    this.state.canvas.add(
      new fabric.IText('Tap and Type', {
        left: 50,
        top: 100,
        fontFamily: 'arial black',
        fill: '#333',
        fontSize: 50,
      })
    );
  }
  render() {
    return (
      <div>
        <div className="mt-5 d-flex justify-content-center">
          <h3>Canvas FabricJS </h3>
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <button onClick={() => this.Addtext()}>Add Texto</button>
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <div className="post-canvas">
            <canvas
              id="canvas"
              ref={(node) => {
                this.canvas = node;
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
