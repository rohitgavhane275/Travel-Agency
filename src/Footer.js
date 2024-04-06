import React from "react";

const Footer=()=>{
    return(
        <>
            {/* <!-- footer section  --> */}

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>about us</h3>
            <p>
              Trusted results for Travel Agency Us. Check Visymo Search for the
              best results! Unlimited Access. Always Facts. Privacy Friendly.
              The Best Resources. Results & Answers. Services: Best Results,
              Explore Now, New Sources, Best in Search.
            </p>
          </div>
          <div className="box">
            <h3>branch locations</h3>
            <a href="#">india</a>
            <a href="#">USA</a>
            <a href="#">japan</a>
            <a href="#">france</a>
          </div>
          <div className="box">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">book</a>
            <a href="#">packages</a>
            <a href="#">services</a>
            <a href="#">contact</a>
          </div>
          <div className="box">
            <h3>follow us</h3>
            <a href="#">facebook</a>
            <a href="#">instagram</a>
            <a href="#">twitter</a>
            <a href="#">linkedin</a>
          </div>
        </div>

        <h1 className="credit">
          {" "}
          created by <span> Rohit Gavhane </span> | all rights reserved!{" "}
        </h1>
      </section>
        </>
    )
}
export default Footer;