import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './accueil.css'; 
const JewelrySection = () => {
  return (
    <Container fluid className="jewelry-section">
  <Row className="align-items-center">
    <Col md={6} className="text-part">
      <h2>Born from Artistic Inspiration and Timeless Elegance</h2>
      <p>
        Discover jewelry that combines the beauty of art with the sophistication of modern fashion. Each piece is crafted with care and attention to detail.
      </p>
      <Button variant="outline-primary" className="discover-btn">
        Discover More
      </Button>
    </Col>
    <Col md={6} className="image-part">
      <Card className="border-0">
        <Card.Img 
          variant="top" 
          src='./image/jeweler-crafting-petraploy-jewelry-hands-working-detailed-designs-modern-studio_1291600-29663.jpg' 
          alt="Jeweler" 
        />
        <Card.Body className="card-overlay">
          <div className="icon-and-text">
            <div className="icon">
              <img src='./image/anneaux-de-mariage.png' alt='' width={'35px'} />
            </div>
            <div className="text">
              <h5>Expert Jewelry Craftsmanship</h5>
              <p>Our skilled artisans blend traditional techniques with modern design to create unique, exquisite pieces.</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>

  );
};

export default JewelrySection;
