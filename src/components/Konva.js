import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Rect, Text, Circle, Line, Image } from 'react-konva';
import useImage from 'use-image';

//IMAGE
const LionImage = () => {
  const [image] = useImage('https://konvajs.org/assets/lion.png');
  return <Image image={image} />;
};
class URLImage extends React.Component {
  state = {
    image: null,
  };
  componentDidMount() {
    this.loadImage();
  }
  componentDidUpdate(oldProps) {
    if (oldProps.src !== this.props.src) {
      this.loadImage();
    }
  }
  componentWillUnmount() {
    this.image.removeEventListener('load', this.handleLoad);
  }
  loadImage() {
    // save to "this" to remove "load" handler on unmount
    this.image = new window.Image();
    this.image.src = this.props.src;
    this.image.addEventListener('load', this.handleLoad);
  }
  handleLoad = () => {
    // after setState react-konva will update canvas and redraw the layer
    // because "image" property is changed
    this.setState({
      image: this.image,
    });
    // if you keep same image object during source updates
    // you will have to update layer manually:
    // this.imageNode.getLayer().batchDraw();
  };
  render() {
    return (
      <Image
        x={this.props.x}
        y={this.props.y}
        image={this.state.image}
        ref={(node) => {
          this.imageNode = node;
        }}
      />
    );
  }
}

//Text Drag and drop

class TextDragDrop extends Component {
  state = {
    isDragging: false,

    text: 'Draggable Text',
    x: 50,
    y: 50,
    fontsize: 15,
  };

  render() {
    return (
      <Text
        text={this.state.text}
        x={this.state.x}
        y={this.state.y}
        fontSize={this.state.fontsize}
        draggable
        fill={this.state.isDragging ? 'green' : 'black'}
        onDragStart={() => {
          this.setState({
            isDragging: true,
          });
        }}
        onDragEnd={(e) => {
          this.setState({
            isDragging: false,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        // onDblClick={(e) => {
        //   const absPos = e.target.getAbsolutePosition();
        //   let { newTextObj } = this.state;

        //   this.setState({
        //     text: newTextObj,
        //   });
        // }}
      />
    );
  }
}

//Construction Layout
export class KonvaJS extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Rect
            x={20}
            y={50}
            width={100}
            height={100}
            fill="red"
            shadowBlur={10}
          />
          <Circle x={200} y={100} radius={50} fill="green" />
          <Line
            x={20}
            y={200}
            points={[0, 0, 100, 0, 100, 100]}
            tension={0.5}
            closed
            stroke="black"
            fillLinearGradientStartPoint={{ x: -50, y: -50 }}
            fillLinearGradientEndPoint={{ x: 50, y: 50 }}
            fillLinearGradientColorStops={[0, 'red', 1, 'yellow']}
          />
        </Layer>
        <Layer>
          <URLImage src="https://konvajs.org/assets/yoda.jpg" x={400} y={100} />
          <LionImage />
          <TextDragDrop />
        </Layer>
      </Stage>
    );
  }
}
