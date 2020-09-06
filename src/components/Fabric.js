import { fabric } from 'fabric';
import React, { Component } from 'react';
import './Fabric.css';

//yarn add fabric
// Define the URL where your background image is located
let imageUrl = './profile.png';
var imgURL = 'http://i.imgur.com/8rmMZI3.jpg';

export class Fabric extends Component {
  state = {
    canvas: this.canvas,
    font: 'Times New Roman',
    file: '',
    imagePreviewUrl: '',
  };

  componentDidMount() {
    this.state.canvas = new fabric.Canvas('canvas');
    this.chooseBackground();
  }
  chooseBackground() {
    //set Background
    this.state.canvas.setBackgroundImage(
      'http://fabricjs.com/assets/jail_cell_bars.png',
      this.state.canvas.renderAll.bind(this.state.canvas),
      {
        backgroundImageOpacity: 0.5,
        backgroundImageStretch: false,
      }
    );
  }

  _handleChangeFont = (event) => {
    this.setState({ font: event.target.value });
    console.log(this.state.font);
    let objects = this.state.canvas.getActiveObject();
    if (objects) {
      objects.fontFamily = this.state.font;
      objects.setCoords();
      this.state.canvas.renderAll();
    }
  };

  Addtext() {
    this.state.canvas.add(
      new fabric.IText('Tap and Type', {
        left: 50,
        top: 100,
        fontFamily: this.state.font,
        fill: '#333',
        fontSize: 50,
      })
    );
  }

  // remove object after select
  RemoveObject() {
    let objects = this.state.canvas.getActiveObject();
    console.log(objects);
    this.state.canvas.remove(objects);
  }
  //get all canvas to JSON
  getJSON() {
    let json = JSON.stringify(this.state.canvas);
    console.log(json);
  }
  // save image
  // saveImage(e) {
  //   this.href = this.state.canvas.toDataURL({
  //     format: 'png',
  //     quality: 0.8,
  //   });
  //   this.download = 'custom.png';
  // }

  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
      let pugImg = new Image();
      pugImg.src = reader.result;
      this.state.canvas.add(
        new fabric.Image(pugImg, {
          angle: 45,
          width: 500,
          height: 500,
          left: 50,
          top: 100,
          scaleX: 0.25,
          scaleY: 0.25,
        })
      );
    };
    reader.readAsDataURL(file);
  }

  render() {
    // Define
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }
    return (
      <div>
        <div className="mt-5 d-flex justify-content-center">
          <h3>Canvas FabricJS </h3>
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <button onClick={() => this.Addtext()}>Add Texto</button>
          <select
            id="font-family"
            onChange={this._handleChangeFont}
            ref={(ref) => {
              this._select = ref;
            }}
          >
            <option value="Times New Roman">Times New Roman</option>
            <option value="Impact">Impact</option>
            <option value="PT Sans">PT Sans</option>
            <option value="Montserrat">Montserrat</option>
            <option value="Merriweather">Merriweather</option>
          </select>
          <button onClick={() => this.RemoveObject()}>select and delete</button>
          <input
            className="fileInput"
            type="file"
            onChange={(e) => this._handleImageChange(e)}
          />
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <div className="post-canvas">
            <canvas
              id="canvas"
              ref={(node) => {
                this.canvas = node;
              }}
              width="400"
              height="400"
            />
            <div className="imgPreview">{$imagePreview}</div>
          </div>
        </div>
      </div>
    );
  }
}
