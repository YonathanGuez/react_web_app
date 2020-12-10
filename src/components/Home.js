import React, { Component } from 'react';
import Carousel2 from './Carousel2/Carousel2';
export class Home extends Component {
  render() {
    const imgList = [
      {
        id: 8798,
        url:
          'https://splashbase.s3.amazonaws.com/newoldstock/regular/tumblr_ph8vgdJV2r1sfie3io1_1280.jpg',
        large_url:
          'https://splashbase.s3.amazonaws.com/newoldstock/large/tumblr_ph8vgdJV2r1sfie3io1_1280.jpg',
        source_id: null,
      },
      {
        id: 788,
        url:
          'https://splashbase.s3.amazonaws.com/littlevisuals/regular/tumblr_n4e0j6iBHs1sdyj9lo1_1280.jpg',
        large_url:
          'https://splashbase.s3.amazonaws.com/littlevisuals/large/1rfmzeW',
        source_id: null,
      },
      {
        id: 8802,
        url:
          'https://splashbase.s3.amazonaws.com/mazwai/regular/the_sea_also_rises_FKY.png%3F1506949636',
        large_url:
          'https://splashbase.s3.amazonaws.com/mazwai/large/the_sea_also_rises_FKY.mp4%3F1506949636',
        source_id: 1801,
      },
    ];
    return (
      <div className="mt-5 d-flex justify-content-left">
        <h3>Welcome home</h3>
        <Carousel2
          imgList={imgList}
          img_width={300}
          img_height={300}
          visibleImages={3}
          duration={750}
        />
      </div>
    );
  }
}
