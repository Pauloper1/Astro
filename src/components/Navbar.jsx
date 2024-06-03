import React from 'react'
import './Navbar.css'
export const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid navbarWrapper">
                    <a class="navbar-brand" href="#">uiAid</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Work</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Research</a>
                            </li>
            
                        </ul>
                        <button class="btn btn-outline-success" type="submit">Login</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
