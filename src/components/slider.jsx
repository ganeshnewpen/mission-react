import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    const slides = [
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCu9RSWbGskv3_3mu_aMwBTFMcMG8XrgzcJPJJwW6RfA5bErAJWG1UP9tJpngpOBYzuHA&usqp=CAU',

        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1PODB9VlpAqblwt2paYM6Ss20no1mj1O3dXa2EOFtgrsYWdg0K4OdOVJ875_k7O9oNw&usqp=CAU',

        },
        {
            image: 'https://wallpaperaccess.com/full/1397715.jpg ',

        },
    ];

    return (
        <div className="boot-carousel">
            <h4>Recent Blogs</h4>
            <Carousel>
                {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                        <img className="d-block w-100" src={slide.image} alt={slide.title} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;
