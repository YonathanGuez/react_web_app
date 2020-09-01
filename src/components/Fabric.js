import { fabric } from 'fabric';
import React, { Component } from 'react';
import './Fabric.css';

export class Fabric extends Component {
  componentDidMount() {
    // Make a New Canvas
    this.canvas = new fabric.Canvas('canvas');
    // rectangle
    let rect = new fabric.Rect({
      top: 100,
      left: 100,
      width: 30,
      height: 30,
      fill: 'red',
    });
    this.canvas.add(rect);
    // Text
    let fonts = ['Pacifico', 'VT323', 'Quicksand', 'Inconsolata'];
    fonts.unshift('Times New Roman');

    let comicSansText = new fabric.Textbox("I'm in Comic Sans", {
      fontFamily: 'Comic Sans',
    });

    let select = document.getElementById('font-family');
    fonts.forEach(function (font) {
      let option = document.createElement('option');
      option.innerHTML = font;
      option.value = font;
      select.appendChild(option);
    });

    this.canvas.add(comicSansText).setActiveObject(comicSansText);
  }
  render() {
    return (
      <div className="mt-5 d-flex justify-content-center">
        <h3>Canvas FabricJS </h3>
        <select id="font-family">
          <option value="Times New Roman">Times New Roman</option>
          <option value="Pacifico">Pacifico</option>
          <option value="VT323">VT323</option>
          <option value="Quicksand">Quicksand</option>
          <option value="Inconsolata">Inconsolata</option>
        </select>
        <div className="post-canvas">
          <canvas id="canvas" width="400" height="400"></canvas>
        </div>
      </div>
    );
  }
}
