import React from "react";

const Home=()=>{
    return(
        <>
            {/* <!-- home section starts  --> */}
            <section className="home" id="home">
                <div class="content">
                    <h3>Explore the world</h3>
                    <p>If you want to go far, go together</p>
                    <a href="#" class="btn">lets go</a>
                </div>
                <div class="video-container">
                    <video src="./img/vid-3.mp4" id="video-slider" loop autoplay muted></video>
                </div>
            </section>
            {/* <!-- home section ends --> */}
        </>
    )
}
export default Home;