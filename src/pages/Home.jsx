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
            <div id='banner1' class='container-fluid'>
                <div id='background' class='container-fluid'>
                    <div class="container">
                        <div class="row text-center">
                            <h1>Effortlessly Create High-Quality Articles with Our AI Article Generator</h1>
                            <p>AI has the potential to revolutionize the way we live and work, from improving healthcare and transportation to enhancing the way.</p>
                            <div className="buttonContainer">
                                <button id='getStartedBtn'class="btn btn-outline-success">Get Started</button>
                                <button id='exploreBtn' class="btn btn-outline-success">Explore</button>
                            </div>
                        </div>

                    </div>
                    <img id="scirle" src="/images/Purple_Circle_2.png" alt="circle1" />
                    <img id="bcirle" src="/images/Purple_Circle.png" alt="circle1" />

                </div>

                <img id='sectionbg' alt='softwareImage' src='/images/section1.png'></img>
            </div>
            <div id='banner2' class="container-fluid min-vh-100">
                <div class="row contentContainer">
                    <div className="col">
                        <h1>
                            Most Popular Tools
                        </h1>
                        <p>
                            These are the most poplular tools and a good place to start. <br />
                            Give them a try!
                        </p>
                        <div className="cards">
                            <CardContainer />
                        </div>
                    </div>

                </div>

            </div>
            <div class="container-fluid" className="worksBanner">

                <div className="title">
                    <h1>How it works</h1>
                </div>
                <div className="container mt-5">
                    <div class="row">
                        <div class="col-md-6 col-xs-12">
                            <h2>Enter your post's title & keyword</h2>
                            <p>
                                Simply provide our AI writer with 1-2 sentences on what to write, and it’ll understand and start writing for you.
                            </p>
                            <ul>
                                <li><FaCheck /> Include any SEO keywords you want to rank for</li>
                                <li><FaCheck /> Customize your copy with tone and perspective options</li>
                                <li><FaCheck /> Choose from 25+ languages</li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <Table />
                        </div>
                        <img id="tablecirle" src="/images/Purple_Circle.png" alt="circle1" />
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row ">
                        <div class="col-md-6 col-xs-12">
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
                        <div className="col-md-6 col-xs-12">
                            <Barchart />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
