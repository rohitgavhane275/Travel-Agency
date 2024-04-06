import React from "react";

const Book=()=>{
    return(
        <>
            {/* <!-- book section starts  --> */}
            <section className="book" id="book">
                <h1 className="heading">
                    <span>b</span>
                    <span>o</span>
                    <span>o</span>
                    <span>k</span>
                    <span className="space"></span>
                    <span>n</span>
                    <span>o</span>
                    <span>w</span>
                </h1>

                <div className="row">
                    <div className="image">
                        <img src="./img/162.jpg" alt="" />
                    </div>

                    <form action="">
                        <div className="inputBox">
                            <h3>Enter Email</h3>
                            <input type="text" placeholder="Enter your email" />
                        </div>
                        <div className="inputBox">
                            <h3>Enter Name</h3>
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className="inputBox">
                            <h3>where to</h3>
                            <input type="text" placeholder="place name" />
                        </div>
                        <div className="inputBox">
                            <h3>how many</h3>
                            <input type="number" placeholder="number of guests" />
                        </div>
                        <div className="inputBox">
                            <h3>arrivals</h3>
                            <input type="date" />
                        </div>
                        <div className="inputBox">
                            <h3>leaving</h3>
                            <input type="date" />
                        </div>
                        <input type="submit" className="btn" value="book now" />
                    </form>
                </div>
            </section>
            {/* <!-- book section ends --> */}
        </>
    )
}
export default Book;