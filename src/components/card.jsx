import React from 'react';

const Card = ({ title, image, description }) => {
  return (
    <div className="card rounded">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title my-3">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-sm-4">
          <Card
            title="Example Card 1"
            image="path/to/image1.jpg"
            description="This is the description for Example Card 1."
          />
        </div>
        <div className="col-sm-4">
          <Card
            title="Example Card 2"
            image="path/to/image2.jpg"
            description="This is the description for Example Card 2."
          />
        </div>

        <div className="col-sm-4">
          <Card
            title="Example Card 3"
            image="path/to/image3.jpg"
            description="This is the description for Example Card 3."
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
