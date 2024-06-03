import React from 'react'
import { Navbar } from '../components/Navbar'
export const Home = () => {
    return (
        <>
            <Navbar />
            <div id='banner1'>
                <div id='background'>
                    <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero harum dolores eius voluptates incidunt repudiandae </h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ipsum dolore ab pariatur impedit quibusdam minus sunt sequi, veniam accusantium.</p>
                </div>

                <div className="buttonContainer">
                    <button>Get Started</button>
                    <button>Explore</button>
                </div>
                <img alt='softwareImage'></img>
            </div>
            <div id='banner2'>
                <div class="container">
                    <h1>
                        Most Popular Tools
                    </h1>
                    <p>
                        These are the most poplular tools and a good place to start. <br />
                        Give them a try
                    </p>
                </div>
            </div>
            <div>Home</div>
        </>
    )
}
