import React, { Component } from 'react';
import { Rings } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class Loader extends Component {
  render() {

    return (
      <div className="flex justify-center items-center ">
        <Rings color="#00BFFF" height={80} width={80} />
      </div>
    );
	
  }
}
