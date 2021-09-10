import React, { Component } from "react";
import ReactDom from "react-dom";
import SeasonDisplay2 from './SeasonDisplay2'
import Spinner from "./Spinner";

// const SeasonDisplay = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Latitude: </div>;
// };

// ----------------------------------------------

// class SeasonDisplay extends React.Component {
//     render() {
//       window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err)
//       );

//       return <div>Latitude: </div>;
//     };
//   };

// --------------------------------------------

class SeasonDisplay extends React.Component { 
state = { lat: null , errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude}),
        err =>this.setState({errorMessage: err.message})
      );
  }

  renderContent() {
    // return (
    //     <div>
    //         Latitude: {this.state.lat}
    //         <br/>
    //         Error: {this.state.errorMessage}
    //     </div>
    // )
    if (this.state.errorMessage && !this.state.lat){
        return <div>Error : {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay2 lat={this.state.lat}/>
    }
    return <Spinner message='Please accept location request'/>;
  }

  render() {
    return(
        <div className='border red'>
            {this.renderContent()}
        </div>
    )
  }
}

export default SeasonDisplay;
