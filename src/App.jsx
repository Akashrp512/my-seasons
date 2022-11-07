import React from 'react';
import Spinner from './spinner';
import SeasonDisplay from './SeasonDisplay';
import './style/App.css';


class App extends React.Component{
  /*
  constructor(props) {
      super(props); 
    //THIS IS THE ONLY TIME we do direct assignment to this.state
      this.state={ latitude: null, errorMessage: '' };  
    
  }
  */

// ANOTHER WAY TO INITIALIZE STATE

  state={latitude:null, errorMessage: ''};

  componentDidMount() {

    window.navigator.geolocation.getCurrentPosition(
        position => {
            //we called set state to update our latitude
            this.setState({latitude: position.coords.latitude})

            /* WE DID NOT DO
            this.state.latitude= position.coords.latitude
            */
        },
        error =>{
            this.setState({errorMessage: error.message})
        }
     );
  };

  renderContent() {
          if(this.state.errorMessage  && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>
           }
      
          if(!this.state.errorMessage  && this.state.latitude) {
             return <SeasonDisplay latitude={this.state.latitude}/>;
           }
   
        return <Spinner message="Please accept location request!"/>;
  }

    render() {
      
        return <div>{this.renderContent()}</div>

    }
}

export default App;
  //tell our component to rerender itself with new information