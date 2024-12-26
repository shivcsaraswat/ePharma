

import React from 'react';
import EpharmaLogo from './e-pharma_logo.tsx';
import {ToggleButton} from './toggleButton.tsx';
import SearchBox from './searchBox.tsx'
import LoginButton from './loginButton.tsx';
import CartButton from './cartButton.tsx';
const NavBar: React.FC = () => { 
    return (
        <div className = " flex h-16 p-4 justify-start" > 
           <div className = "ml-[300px] h-16 flex space-x-[10px] justify-start items-center">
                <EpharmaLogo/>
                <ToggleButton/>
                <SearchBox/>
           </div>
            <div className = "ml-[466px] flex space-x-[4px] justify-start items-center ">        
                <LoginButton/>
                <CartButton/>
            </div>
        </div>
    );
};

export default NavBar;


