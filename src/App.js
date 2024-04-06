import React from "react";

import Nav from "./Nav";
import Home from './Home';
import Book from "./Book";
import Package from "./Package";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";
// import emailjs from 'emailjs-com';
// import { Form, Input, TextArea, Button } from 'semantic-ui-react';
// import Swal from 'sweetalert2';

const App = () => {

  const Package_data=[
    {
      img:'./img/p-1.jpg',
      location:'Mumbai',
      para:'Mumbai is one crowded city which pushes everybody nowhere but towards success.',
      price:'$90.00',
    },
    {
      img:'./img/p-2.jpg',
      location:'Hawaii',
      para:'Hawaii is not a state of mind, but a state of grace.',
      price:'$130.00',
    },
    {
      img:'./img/p-3.jpg',
      location:'Sydney',
      para:'Sydney has so much natural beauty; its just a beauty city.Sydney is the capital city of the state of New South Wales.',
      price:'$150.00',
    },
    {
      img:'./img/p-4.jpg',
      location:'Paris',
      para:'Paris is not a city,its a world.To know Paris is to know a great deal.',
      price:'$190.00',
    },
    {
      img:'./img/p-5.jpg',
      location:'Tokyo',
      para:'The city is always changing in fun, unpredictable ways and creates new styles by mixing modernity and tradition',
      price:'$120.00',
    },
    {
      img:'./img/p-6.jpg',
      location:'Egypt',
      para:' Where It All Begins,was intended to highlight the North African countrys historic status as a cradle of civilisations.',
      price:'$160.00',
    }
  ]

  const Service_data=[
    {
      serviceicon:'fas fa-hotel',
      serviceheading:'affordable hotels',
      servicepara:'They might offer various amenities like a living room-style common room, kitchen facilities, computers, board games, a pool table and so on. At reception you can often sign up for group activitie or tours, get your laundry done, get some help with bookings, or browse some travel guides.',
    },
    {
      serviceicon:'fas fa-utensils',
      serviceheading:'food and drinks',
      servicepara:'Food and Beverage Services can be broadly defined as the process of preparing, presenting and serving of food and beverages to the customers',
    },
    {
      serviceicon:'fas fa-bullhorn',
      serviceheading:'safty gaide',
      servicepara:'This safety guide is designed to assist owners and managers of small tourism ... the hazards that are linked to the work you do or the service you provide',
    },
    {
      serviceicon:'fas fa-globe-asia',
      serviceheading:'around the world',
      servicepara:'Tourism and travel-related services include services provided by hotels and restaurants (including catering), travel agencies and tour operator services, tourist guide services and other related services',
    },
    {
      serviceicon:'fas fa-plane',
      serviceheading:'fastest travel',
      servicepara:' A travel agency is a private retailer or public service than provides travel and tourism-related services to the general public on behalf of accommodation or travel suppliers to offer different kinds of travelling packages for each destination',
    },
    {
      serviceicon:'fas fa-hiking',
      serviceheading:'adventures',
      servicepara:'Adventure tourism is about connecting with a new culture or a new landscape and being physically active at the same time. It is not about being risky or pushing your boundaries',
    }   
  ]

  return (
    <>
      <Nav/>
      <Home/>
      <Book/>
      {/* <Package/> */}
      <div className="col-md-12 my-2 p-5">
      <h1 className="heading">
                <span>p</span>
                <span>a</span>
                <span>c</span>
                <span>k</span>
                <span>a</span>
                <span>g</span>
                <span>e</span>
                <span>s</span>
            </h1>
        <div className="row ">
        {
          Package_data.map((val)=>{
            return(
              <>                      
                <div className="col-md-4 my-3 ">
                  <Package
                    img={val.img}
                    location={val.location}
                    para={val.para}
                    price={val.price}
                  />
                </div>
              </>
            )
          })
        }
        </div>
      </div>
      {/* <Service/> */}
      <div className="col-md-12 my-2 p-5">
        <h1 className="heading">
          <span>s</span>
          <span>e</span>
          <span>r</span>
          <span>v</span>
          <span>i</span>
          <span>c</span>
          <span>e</span>
          <span>s</span>
        </h1>
        <div className="row">
          {
            Service_data.map((val)=>{
              return(
                <>
                  <div className="col-md-4 my-3 ">
                    <Service
                      serviceicon={val.serviceicon}
                      serviceheading={val.serviceheading}
                      servicepara={val.servicepara}
                    />
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
      <Contact/>
      <Footer/>
    </>
  );
};
export default App;
