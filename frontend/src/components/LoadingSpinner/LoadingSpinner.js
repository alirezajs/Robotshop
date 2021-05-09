import React, { Component } from "react";
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
import "./LoadSpinier.css";


const styles = { marginBottom: 20, height: 150 };

class LoadingSpinner extends Component {
  render() {
    return (
      <span>
        <LoadingMask className="customize" loading={true} text={"loading..."}>
          <div style={styles}>
          </div>
        </LoadingMask>
        .
      </span>
    );
  }
}

export default LoadingSpinner;
