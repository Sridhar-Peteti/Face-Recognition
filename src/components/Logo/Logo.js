import React from 'react';
import Tilt from 'react-tilt';
import appLogo from './appLogo.png';
import './Logo.css';
const Logo = ( ) => {
   return (  
       <div className='ma4 mt0'>
         <Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 250, width: 250 }} >
            <div className="Tilt-inner pa3">
                <img style ={{paddingTop: '5px'}} alt='logo' src={appLogo} />
            </div>
         </Tilt>  
       </div> 

   );
} 

export default Logo;