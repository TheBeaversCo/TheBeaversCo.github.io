import React, {useState, useEffect} from 'react';
import {Typography} from '@material-ui/core'
import logoLight from '../../assets/img/TheBeaverLight.svg';
import logoDark from '../../assets/img/TheBeaverDark.svg';

function Home(props) {
    let [logo, setLogo] = useState(logoLight);
    useEffect(() => {
        if (!props.darkMode) {
            setLogo(logoLight);
        } else {
            setLogo(logoDark);
        }
    }, props.darkMode);
    console.log("Logo:", props.darkMode);
    return (
        <React.Fragment>
            <div className="container" style={{height: "100vh", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <Typography variant="h1" style={{fontFamily: "Playfair Display", paddingBottom: "5rem", fontWeight: "800"}}>Welcome</Typography>
                <img style={{justifyContent: "center", alignItems: "center", paddingBottom: "3rem", width: "50%"}}
                     src={logoLight} alt={'The Beaver Corporation'}
                />
                <h2>Our Page is under heavy construction</h2>
                <h3>We are coming soon</h3>
            </div>
        </React.Fragment>
    )
}

export default Home;