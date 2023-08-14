import React from 'react';
import { Carousel, Card, CardDeck } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100" 
                        src="https://e0.pxfuel.com/wallpapers/996/887/desktop-wallpaper-healthcare-health-care-medical.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption style={{color:'black'}}>
                        <h3>Welcome to Our Healthcare Services</h3>
                        <p>Providing quality healthcare for all.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{height:500}}
                        src="https://img.freepik.com/free-vector/young-women-exercising-flat-illustration-set_107791-14287.jpg?w=2000"
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{color:'black'}}>
                        <h3>Expert Doctors</h3>
                        <p>Skilled and experienced medical professionals.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{height:500}}
                        src="https://hips.hearstapps.com/hmg-prod/images/healthy-food-clean-eating-selection-royalty-free-image-854725370-1553880935.jpg?resize=1200:*"
                        alt="Third slide"
                    />
                    <Carousel.Caption style={{color:'black'}}>
                        <h3>Modern Facilities</h3>
                        <p>State-of-the-art facilities for patient care.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container mt-5">
                <h2>Our Services</h2>
                    <Card>
                        <Card.Img variant="top" src="service-1.jpg" />
                        <Card.Body>
                            <Card.Title>Cardiology</Card.Title>
                            <Card.Text>
                                Expert cardiology services to keep your heart healthy.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="service-2.jpg" />
                        <Card.Body>
                            <Card.Title>Orthopedics</Card.Title>
                            <Card.Text>
                                Comprehensive orthopedic care for bone and joint issues.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="service-3.jpg" />
                        <Card.Body>
                            <Card.Title>Pediatrics</Card.Title>
                            <Card.Text>
                                Specialized healthcare for infants, children, and adolescents.
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </div>
        </div>
    );
};

export default Home;
