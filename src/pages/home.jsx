import React from "react";

import Landing from '../components/landing';

import UseStateComponents from "../components/usestates";

import UserList from "./userlist";

import Card from '../components/card';


const Home = () =>{
    return(
        <div>
        <Landing />
        <Card />
        <UseStateComponents />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <UserList />
            </div>
            {/* <div className="col-lg-6">
              {isLoggedIn ? <InsertForm /> : null}
            </div> */}
          </div>
        </div>
      </div>

    );
};

export default Home;