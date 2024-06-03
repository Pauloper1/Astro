import React from 'react'
import './Home.css'
import { Navbar } from '../components/Navbar'
import { CardContainer } from '../components/CardContainer'
import { Table } from '../components/Table'
import { Barchart } from '../components/Barchart'
import { FaCheck } from 'react-icons/fa';
export const Home = () => {
    return (
        <>
            <Navbar />
            <div id='banner1'>
                <div id='background'>
                    <div className="container align-items-center">
                        <h1>Effortlessly Create High-Quality Articles with Our AI Article Generator</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ipsum dolore ab pariatur impedit quibusdam minus sunt sequi, veniam accusantium.</p>
                        <div className="buttonContainer">
                            <button id='getStartedBtn'>Get Started</button>
                            <button id='exploreBtn'>Explore</button>
                        </div>
                    </div>

                </div>

                <img id='sectionbg' alt='softwareImage' src='src\assets\section1.png'></img>
            </div>
            <div id='banner2'>
                <div class="contentContainer">
                    <h1>
                        Most Popular Tools
                    </h1>
                    <p>
                        These are the most poplular tools and a good place to start. <br />
                        Give them a try!
                    </p>
                </div>
                <div className="cards">
                    <CardContainer />
                </div>
            </div>
            <div className="worksBanner">
                <div className="title">
                    <h1>How it works</h1>
                </div>
                <div className="workWrapper">
                    <div className="workContent">
                        <div>
                            <h2>Enter your post’s title & keyword</h2>
                            <p>
                                Simply provide our AI writer with 1-2 sentences on what to write, and it’ll understand and start writing for you.
                            </p>
                            <ul>
                                <li><FaCheck /> Include any SEO keywords you want to rank for</li>
                                <li><FaCheck /> Customize your copy with tone and perspective options</li>
                                <li><FaCheck /> Choose from 25+ languages</li>
                            </ul>
                        </div>

                    </div>
                    <div className="table">
                        <Table />
                    </div>
                </div>
                <div className="workWrapper">
                    <div className="content">
                        <div>
                            <h2>Enter your post’s title & keyword</h2>
                            <p>
                                Simply provide our AI writer with 1-2 sentences on what to write, and it’ll understand and start writing for you.
                            </p>
                            <ul>
                                <li><FaCheck /> Include any SEO keywords you want to rank for</li>
                                <li><FaCheck /> Customize your copy with tone and perspective options</li>
                                <li><FaCheck /> Choose from 25+ languages</li>
                            </ul>
                        </div>
                    </div>
                    <div className="barchart">
                        <Barchart />
                    </div>
                </div>

            </div>

            <div>Home</div>
        </>
    )
}
