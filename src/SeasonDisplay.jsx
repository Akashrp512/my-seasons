import React from 'react';


const seasonConfig ={
   summer:{},
   winter :{}

};

const getSeason= (latitude, month) =>{
 if(month>2 && month<9) {
  return latitude > 0 ? 'Summer' :'winter';
 } else {
  return latitude > 0 ? 'winter' : 'summer';
 }
   
};

const SeasonDisplay = (props) => {
  const season=getSeason(props.latitude, new Date().getMonth());
  const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
  const iconName = season === 'winter' ? 'snowflake' : 'sun';

  return (
    <div>
     <i className={`${iconName} icon`} />
    <h1>{ text }</h1>
    <i className={`${iconName} icon`} />
    </div>
  )
}

export default SeasonDisplay
