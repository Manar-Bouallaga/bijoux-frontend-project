import React, { useState, useEffect } from "react";

export default function AboutUs() {
  const testimonials = [
    {
      id: 1,
      name: "Brianna Flynn",
      title: "Model",
      text: "Ullamcorper diam lorem et eget eu ornare metus nisl id iaculis. Purus ullamcorper accumsan habitant nascetur fusce in cubilia.",
      img: "./image/smiling-young-asian-woman-isolated.jpg",
    },
    {
      id: 2,
      name: "Mollie Lawrence",
      title: "Business Manager",
      text: "Ullamcorper diam lorem et eget eu ornare metus nisl id iaculis. Purus ullamcorper accumsan habitant nascetur fusce in cubilia.",
      img: "./image/young-beautiful-woman-looking-camera-trendy-girl-casual-summer-white-t-shirt-jeans-shorts-positive-female-shows-facial-emotions-funny-model-isolated-yellow.jpg",
    },
    {
      id: 3,
      name: "Chelsea Austin",
      title: "Blogger",
      text: "Ullamcorper diam lorem et eget eu ornare metus nisl id iaculis. Purus ullamcorper accumsan habitant nascetur fusce in cubilia.",
      img: "./image/portrait-young-woman-with-magnificent-smile-standing-with-arms-folded-isolated-white",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <section className="about-us-section">
        <div className="about-us-header">
          <div className="aboutUs-img">
            <h2>Testimonial</h2>
            <h3>What they say about us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${
                index === activeIndex ? "active" : "hidden"
              }`}
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <h4>{testimonial.name}</h4>
              <p className="title">{testimonial.title}</p>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </section>
    </>
  );
}
