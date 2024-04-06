import React from "react";

const Nav=()=>{
    return(
        <>
            {/* header section starts */}
                <header>
                    <div id="menu-bar" class="fas fa-bars"></div>
                    <a href="#" class="logo">
                        <span>T</span>ravel
                    </a>
                    <nav class="navbar">
                        <a href="#home">Home</a>
                        <a href="#book">Book</a>
                        <a href="#packages">Packages</a>
                        <a href="#services">Services</a>
                        <a href="#contact">Contact</a>
                    </nav>

                    <div class="icons">
                        <i class="fas fa-search" id="search-btn"></i>
                    </div>

                    <form action="" class="search-bar-container">
                        <input type="search" id="search-bar" placeholder="search here..." />
                        <label for="search-bar" class="fas fa-search"></label>
                    </form>
                </header>
            {/* header section ends */}
        </>
    )
}
export default Nav;