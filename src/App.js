import React from 'react';
import './App.css';
import { PhotoPanel } from './PhotoPanel';

function App(props) {
  let photoPanels = props.pictures.map((picture, index) => {
    return <PhotoPanel {...picture} key = {index}/>
})
return (<React.Fragment> 
  <h1>Photos</h1>
  
  {photoPanels}
  
  </React.Fragment>)
}

export default App;