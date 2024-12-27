import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './accueil.css'; 

const JewelrySection = () => {
  return (
    <Container fluid className="jewelry-section">
      <Row className="align-items-center">
        <Col md={6} className="text-part">
          <h2>Inspiré par l'art, créé pour l'élégance intemporelle.</h2>
          <p>
            Depuis nos débuts, nous transformons des idées artistiques en bijoux exceptionnels, célébrant la beauté et la sophistication à chaque création.
          </p>
          <Button variant="outline-primary" className="discover-btn">
            En savoir plus
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
                  {/* Icône pour symboliser un bijoutier professionnel */}
                  <img src='./image/anneaux-de-mariage.png' alt='' width={'35px'} />
                </div>
                <div className="text">
                  <h5>Bijoutier Professionnel</h5>
                  <p>
                    Nos artisans talentueux combinent savoir-faire et précision pour chaque détail, créant des bijoux qui racontent votre histoire.
                  </p>
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
