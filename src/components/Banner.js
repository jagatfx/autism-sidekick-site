import React from 'react'

import './Banner.css'
import logo from '../assets/images/logo.png'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Get ready to level up with Autism Sidekick</h1>
            </header>
            <div className="content">
                <img className="logo" src={logo} alt="Autism Sidekick" />
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Coming Soon!</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
