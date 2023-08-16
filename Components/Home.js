import React from 'react';
import { Carousel, Card, Row, Col } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import your stylesheet for styling
import Cards from './Card';

const Home = () => {
  return (
    <div>
      <div className="company-section text-center mt-5">
        <h2>Welcome to Our Healthcare Services</h2>
        <p>Providing quality healthcare for all.</p>
      </div>

      <div className="image-section text-center">
        <img 
          src="https://e0.pxfuel.com/wallpapers/996/887/desktop-wallpaper-healthcare-health-care-medical.jpg"
          alt="Healthcare"
          className="home-image"
        />
      </div>

      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Carousel className="service-carousel">
          <Carousel.Item>
            <Row>
              <Col md={4} className="mb-4">
                <Card className="service-card">
                  <Card.Img variant="top" src="https://medicalaid.org/wp-content/uploads/2021/04/How-To-Become-A-Cardiologist-Training-Licensing-and-Certification-Requirements.jpg" />
                  <Card.Body>
                    <Card.Title>Cardiology</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="service-card">
                  <Card.Img variant="top" src="https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/166/2020/05/06202059/iStock-1174583243.jpg" />
                  <Card.Body>
                    <Card.Title>Orthopedics</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="service-card">
                  <Card.Img variant="top" src="https://tse3.mm.bing.net/th/id/OIP.bDulLpCnhrxZiaMTN1mPAQHaE6?pid=ImgDet&rs=1" />
                  <Card.Body>
                    <Card.Title>Pediatrics</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          {/* Add more Carousel items for additional services */}
        </Carousel>
      </div>
      <Cards></Cards>
    
    </div>
  );
};

export default Home;
