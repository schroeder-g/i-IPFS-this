import React, { Component } from 'react'
import hero from '../../styles/hero.sass'

import {  Container, Button } from 'react-bootstrap'
// import { useHistory } from 'react-router-dom'


export default function Hero({ isLoading })  {
        // const history = useHistory();
       
        return (
            <section className="welcome" style={isLoading ? {display: 'none'} : {display: 'grid'}}>
                <Container className="hero" fluid>
                        <div>
                            <h2>
                                Small Business. <br /> 
                                <span>HUGE</span> potential.
                            </h2> 
                        </div>
                        <p className="explainer">Manage your company with Web 3.0.</p>
                        {/* <Button className="sign-up-btn" onClick={() => history.push('/sign-up')}>Get Started</Button> */}
                </Container>
            </section>
        )
}
