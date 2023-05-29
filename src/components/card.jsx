import React from 'react';

const Card = ({ title, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="container my-5 sect-card">
      <div className="row">
        <div className="col-sm-4">
          <Card
            title="My Card"
            image="https://img.choice.com.au/-/media/ecc68d2bdc5145db9aa945049927273f.ashx?w=760"
            description="My card desc"
          />
        </div>
        <div className="col-sm-4">
          <Card
            title="My Card 2"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmTHN1Og9F5yeKpVaCt93eHnn_NiBPou1mw&usqp=CAU"
            description="My card desc2"
          />
        </div>

        <div className="col-sm-4">
          <Card
            title="My Card 3"
            image="path/to/image3.jpg"
            description="This is the description for Example Card 3."
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
