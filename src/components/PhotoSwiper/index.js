// @ts-nocheck

import React from 'react';
import WithPhotoSwipe from '../Hoc/withPhotoSwipe';

class PhotoSwiper extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      const galleryElements = document.getElementsByClassName('markdown')[0];
      if (galleryElements) {
        clearInterval(this.timer);
        this.imgs = document.querySelectorAll('li img');
        galleryElements.onclick = this.onThumbnailsClick;
      }
    }, 100);
  }
  render() {
    return null;
  }
}
export default WithPhotoSwipe(PhotoSwiper);
