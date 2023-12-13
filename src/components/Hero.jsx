import React from "react";
import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";

const carouselImages = [hero1, hero2, hero3, hero4]; // Diziyi burada tanımla

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          We are changing the way people shop..
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Necessitatibus,
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-vertical p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => (
          <div key={image} className="carousel-item">
            <img
              src={image}
              className="rounded-box h-full w-75 object-cover"
              alt={`carousel-${image}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
