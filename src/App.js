
import './App.css';
import React from 'react';
import ComponentProfil from './profil/ComponentProfil.jsx';
import myWonderfulImage from "./profil/image.jpg"
import PhotoProfil from './profil/PhotoProfil.jsx'
import ActionLink from "./profil/handleclick.jsx"

function App() {
  const style1 = {marginLeft: '10%' , marginTop: '5%' , color: 'rgb(245, 237, 237)'}
  const style2 = {marginLeft: '4%'}
  const style3 = {textAlign: "center", alignItems: "center", padding: '10px', marginTop: '-35%', marginLeft: '30%', border: '4px solid rgb(241, 121, 8)', color: 'rgb(238, 229, 229)' }
  return (
    <div className='App'>  
      <div style={style1}>      
        <PhotoProfil>{myWonderfulImage}</PhotoProfil>
          <div style={style2}>           
            <ComponentProfil fullName="Bouzaiene Ali" profession="Profession: Ingénieur" />
          </div>
      </div>
      <div style={style3}>              
        <ComponentProfil  bio0="Ali Bz" bio1="3alibz@gmail.com"  bio2="Tunisia" bio3="Topography and Geomatics Engineer" bio4="Sport" bio5="Tel : 53 250 795" bio6="https://www.facebook.com/profile.php?id=100011728320936" bio7="https://www.linkedin.com/in/bouzaiene-ali-637b49174/" bio8="https://www.instagram.com/bouzaiene__ali/"/>            
      </div> 
        <div className='click'>
          <ActionLink></ActionLink>   
        </div>   
    </div>  
  )
};
export default App;