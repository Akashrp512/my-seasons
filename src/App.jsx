import React from 'react'



class App extends React.Component{
  constructor(props) {
      super(props); 
//THIS IS THE ONLY TIME we do direct assignment ot this.state
     this.state={ latitude: null, errorMessage: '' };


 
  }

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

    render() {
      
        if(this.state.errorMessage  && !this.state.latitude) {
             return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage  && this.state.latitude) {
              return <div>Latitude: {this.state.latitude}</div>
        }
          
       return <div>Loading!</div> 

    }
}

export default App;
  //tell our component to rerender itself with new information