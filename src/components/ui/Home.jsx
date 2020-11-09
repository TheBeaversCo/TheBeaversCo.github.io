import React from 'react';
import {Typography} from '@material-ui/core'
import logo from '../../logo.svg';


function Home() {

    return (
        <React.Fragment>
            <div className="container" style={{justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <Typography variant="h1" style={{fontFamily: "Playfair Display", paddingBottom: "5rem", fontWeight: "800"}}>Welcome</Typography>
                <img style={{justifyContent: "center", alignItems: "center", paddingBottom: "3rem", width: "50%"}} src={logo} alt={'The Beaver Corporation'} />
                <h2>Our Page is under heavy construction</h2>
                <h3>We are coming soon</h3>
            </div>
        </React.Fragment>
    )
}

export default Home;