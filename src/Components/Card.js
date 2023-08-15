import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import "./Card.css"

const foodItems = [
  {
    imageUrl:
      'https://img.wbmdstatic.com/dtmcms/live/webmd/consumer_assets/site_images/home_page/wellness-mental-health.jpg?resize=484px:*&output-quality=70',
    title: 'Mental Health',
  },
  {
    imageUrl:
      'https://img.wbmdstatic.com/dtmcms/live/webmd/consumer_assets/site_images/home_page/Wellness_Diet_Weight.jpg?resize=484px:*&output-quality=70',
    title: 'Diet and Weight ',

  },
  {
    imageUrl:
      'https://img.wbmdstatic.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/webmd_homepage_healthy_aging_image_beach_other/464x634_webmd_homepage_healthy_aging_image_beach_other.jpg?resize=484px:*&output-quality=70',
    title: 'Healthy Aging',  },
  {
    imageUrl:
      'https://img.wbmdstatic.com/dtmcms/live/webmd/consumer_assets/site_images/home_page/Wellness_Health_Beauty.jpg?resize=484px:*&output-quality=70',
    title: 'Sex and Relationships',
  },
  {
    imageUrl:
      'https://img.wbmdstatic.com/dtmcms/live/webmd/consumer_assets/site_images/home_page/Wellness_Fitness_and_Excercise.jpg?resize=484px:*&output-quality=70',
    title: 'Fitness and Excercise',
  },
];

function Cards() {
  const [collapseStates, setCollapseStates] = useState(
    new Array(foodItems.length).fill(false)
  );

  const handleCollapse = (index) => {
    const updatedStates = [...collapseStates];
    updatedStates[index] = !updatedStates[index];
    setCollapseStates(updatedStates);
  };

  return (
    <div>
      <Container>
        <Row className="mt-5">
          {foodItems.map((item, index) => (
            <Col key={index} md={3} className='mb-3'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button 
                     className="button"
                    onClick={() => handleCollapse(index)}
                  >
                    {collapseStates[index] ? 'Close' : 'Read More'} 
                  </Button>
                </Card.Body>
                <Collapse in={collapseStates[index]}>
                  <Card.Footer>
                    <p>Collapsible content here</p>
                  </Card.Footer>
                </Collapse>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Cards;