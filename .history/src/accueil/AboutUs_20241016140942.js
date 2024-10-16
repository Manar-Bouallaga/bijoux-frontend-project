import React from 'react';
import './Ab.css';

const testimonials = [
  {
    id: 1,
    name: "Brianna Flynn",
    position: "Model",
    feedback: "Ullamcorper diam laoreet eget eu ornare metus ad ridiculus. Purus ullamcorper accumsan habitant nascetur fusce mi cubilia.",
    img: "path_to_image1", // Replace with the actual image path
  },
  {
    id: 2,
    name: "Mollie Lawrence",
    position: "Business Manager",
    feedback: "Ullamcorper diam laoreet eget eu ornare metus ad ridiculus. Purus ullamcorper accumsan habitant nascetur fusce mi cubilia.",
    img: "path_to_image2", // Replace with the actual image path
  },
  {
    id: 3,
    name: "Chelsea Austin",
    position: "Blogger",
    feedback: "Ullamcorper diam laoreet eget eu ornare metus ad ridiculus. Purus ullamcorper accumsan habitant nascetur fusce mi cubilia.",
    img: "path_to_image3", // Replace with the actual image path
  },
];

const AboutUs = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2>What they say about us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
      <div className="testimonial-cards">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-feedback">{testimonial.feedback}</p>
            <div className="testimonial-person">
              <img src={testimonial.img} alt={testimonial.name} className="testimonial-img" />
              <div className="person-info">
                <h4 className="person-name">{testimonial.name}</h4>
                <p className="person-position">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default AboutUs;
