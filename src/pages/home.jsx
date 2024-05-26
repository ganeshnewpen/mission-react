import React, { lazy, Suspense } from "react";
import Landing from '../components/landing';
import UseStateComponents from "../components/usestates";
import Card from '../components/card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const UserList = lazy(() => import("./userlist"));

const Home = () => {
  return (
    <div>
      <Landing />
      <Card />
      <UseStateComponents />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Suspense fallback={
              <div className="">
                <FontAwesomeIcon icon={faSpinner} />
              </div>
            }>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
