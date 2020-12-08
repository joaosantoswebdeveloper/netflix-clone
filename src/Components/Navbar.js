import { useEffect, useState } from 'react';
import './Navbar.css';

export function Navbar(){

    const [navbarTransparent, setNavbarTransparent] = useState(false);

    useEffect( ()=> {
        
        window.addEventListener("scroll", ()=>{
            //console.log("window.scoll",window.scrollY);

            if( window.scrollY>100 ){
                setNavbarTransparent(true);
            }
            else{
                setNavbarTransparent(false);
            }
        });

        return ()=>{window.removeEventListener("scroll");}
            
    }, []);

    return (
        <div className={/*"navbar" + (navbarTransparent ? " navbar-transparent" : "") */
        `navbar${navbarTransparent? " navbar-transparent" : ""}`
        
        }>
            <img src="netflix_logo.png" alt="Netflix logo" height="25" />
            <img src="account.png" alt="Netflix login" height="25" />
        </div>
    );
}