import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './accueil.css'; 
const JewelrySection = () => {
  return (
    <Container fluid className="jewelry-section">
      <Row className="align-items-center">
        <Col md={6} className="text-part">
          <h2>Founded from art inspiration and elegance fashion.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ur elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <Button variant="outline-primary" className="discover-btn">
            Discover more
          </Button>
        </Col>
        <Col md={6} className="image-part">
          <Card className="border-0">
            <Card.Img variant="top" src='./image/jeweler-crafting-petraploy-jewelry-hands-working-detailed-designs-modern-studio_1291600-29663.jpg' alt="Jeweler" />
            <Card.Body className="card-overlay">
              <div className="icon-and-text">
                <div className="icon">
                  {/* Add icon for jewelry, for example using FontAwesome */}
                  <i className="fas fa-ring"></i>
                </div>
                <div className="text">
                  <h5>Professional Jeweler</h5>
                  <p>Consectetur curac luctus eget habitasse laoreet suspendisse hendrerit.</p>
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
