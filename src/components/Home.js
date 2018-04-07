import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Image, Jumbotron, Button } from 'react-bootstrap';
import Slider from 'react-slick';
import './Home.css';

export default class Home extends Component {    
        render() {		
          const divStyle = {
            textAlign: 'center',
            textDecoration: 'underline'
          };
          const divStyle2 = {
            textAlign: 'center',
          };

          const divStyle3 = {
            height:'400px',
            width:'700px'
          };

          const divStyle4 = {
            width:'700px'
          };
		  
		  var settings = {
		  dots: true,
		  infinite: true,
		  speed: 500,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		 autoplay: true
		};
	
        return(		
            <div className="slide-container">
                <Slider {...settings}>
					<Image src="assets/slide_1.jpg" />
					<Image src="assets/slide_2.jpg" />
					<Image src="assets/slide_3.jpg" />
					<Image src="assets/slide_4.jpg" />
					<Image src="assets/slide_5.jpg" />
				</Slider>
				
				<br/>
               <h4 style={divStyle}>Why Us</h4>
                <br/>
                <br/>
                <br/>
                <br/>

                <Row style={divStyle}>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets\pic1.png" className="profile-pic"/>
                        <p>We can help make your business more awesome!!</p>
                    </Col>    
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets\pic2.png" className="profile-pic"/>
                        <p>Wanna learn more? Let us help you learn!</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets\pic3.png" className="profile-pic"/>
                        <p>We also make and develop cool new stuffs and programs</p>
                    </Col>    
                </Row>    
                <br/>
                <br/>
                <br/>
                <br/>
                <h4 style={divStyle}>About Us</h4>
                <br/>
                <br/>
                <Jumbotron style={divStyle2}>
                    <p>We are a local company which is evolving with rapid changes in technology. We realise that many Malaysians are getting left behind with new and innovative business solutions that can help to improve local business opportunities. Our team is here to assist your business in becoming bigger, better and stronger. How do we do that? Check out our services below.</p>
                </Jumbotron>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4 style={divStyle}>Our Services</h4>
                <br/>
                <br/>    
                <Row style={divStyle}>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets\ser1.png" className="profile-pic"/>
                        <br/>
                        <br/>
                        <p style={divStyle}>Machine Learning & Data Analytics</p>
                        <br/>
                        <br/>
                        <p style={divStyle2}>Use your existing data to come up with specific marketing strategies and products that caters solely to a particular target market. Based on the results, you will be able to access your clients’ interests and tastes individually</p>
                        <Link to='\'>
                            <Button>View More</Button>
                        </Link>                   
                    </Col>    
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets\ser2.png" className="profile-pic"/>
                        <br/>
                        <br/>
                        <p style={divStyle}>Website Development & Content Management</p>
                        <br/>
                        <br/>
                        <p style={divStyle2}>Looking to create, update & manage your company’s website? Interested in transforming business ideas into Web Apps? With an updated new look and an organised CMS, say hello to a new target market</p>
                        <Link to='\'>
                            <Button>View More</Button>
                        </Link>    
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets\ser3.png" className="profile-pic"/>
                        <br/>
                        <br/>
                        <p style={divStyle}>Mobile Application (App) Development</p>
                        <br/>
                        <br/>
                        <p style={divStyle2}>Ever wondered about transforming your business ideas into Mobile Apps? It is able to reduce the project’s lead time with real time apps. This provides better and faster results, which leads to customer satisfaction</p>
                        <Link to='\'>
                            <Button>View More</Button>
                        </Link>    
                    </Col>    
                </Row> 
                <br/>
                <br/>
                <br/>
                <Jumbotron style={divStyle2}>
                    <h2 style={divStyle}>Let's talk about what we can build together</h2>
                    <br/>
                    <p>Whatever may be your requirement – be it a simple website design, a complex data driven web application development, machine learning, big data analytics – we have a solution for you</p>
                    <Link to='\'>
                            <Button>Contact us now for a free quote!</Button>
                    </Link>    
                </Jumbotron>
                <br/>
                <br/>

                <h4 style={divStyle}>Contact Us</h4>
                <br/>
                <Row>
                    <Col lg={5}>
                        <Row>
                            <Col lg={3}>
                                <Image src="assets\add1.png"/>
                            </Col>    
                            
                            <Col lg={3}>  
                                <h1>Address</h1>
                                <p>Block 3730, Persiaran Apec 63000 Cyberjaya, Selangor</p>
                            </Col>
                        </Row>                     
                        <br/>
                        <br/>
                        <Row>                
                            <Col lg={3}>
                                <Image src="assets\add2.png"/>
                            </Col>
                            <Col lg={3}>  
                                <h1>Phone</h1>
                                <p> +6017 668 5303 </p>
                            </Col> 
                        </Row>          
                        <br/>
                        <br/>   

                        <Row>                   
                            <Col lg={3}>
                                <Image src="assets\add3.png"/>
                            </Col>
                            <Col lg={3}>  
                                <h1>Email</h1>
                                <p> info@oxygenresources.tech</p>
                            </Col>
                        </Row>    
                    </Col>
                    <Col lg={5}>
                        <Row>
                            <Col lg={4}>
                                {/* Name field */}
                                <input  type="text" placeholder="Your name"></input>
                            </Col>
                            <Col lg={4}>
                                {/* Email field */}
                                <input  type="Email" placeholder="Email"></input>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col lg={4}>    
                            {/* Message textarea */}
                            <textarea style={divStyle3} placeholder="Message"></textarea>
                            </Col>
                        </Row>
                        <br/>
                        <Row>   
                            <Col lg={4}>     
                                {/* Submit Button */}
                                <Button style={divStyle4} >Submit</Button>
                            </Col>
                        </Row>
                    </Col>    
                </Row>
                <br/>
            </div>
        );
    }
}

