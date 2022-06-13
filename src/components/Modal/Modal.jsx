import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export default class ModalImage extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  handleClick = event => {
    if (event.target.dataset.name !== 'overlay') {
      return;
    }
    this.props.onClose();
  };

  handleKey = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {

    return (
      <div className={s.Overlay} data-name="overlay" onClick={this.handleClick}>
        <div className={s.Modal} data-name="modal">
          <img src={this.props.src} alt="large" />
        </div>
      </div>
    );
  }
  
}

ModalImage.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};
