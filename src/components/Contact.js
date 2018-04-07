import React, { Component } from 'react';
import { Col, Row, Image, Jumbotron, Button } from 'react-bootstrap';
import './Contact.css';

export default class Contact extends Component{
    render() {
        const divStyle = {
        textDecoration: 'underline'
      };
      const divStyle2 = {
        textAlign: 'center',
        textDecoration: 'underline'
      }; 
      const divStyle3 = {
        height:'400px',
        width:'700px'
      };

      const divStyle4 = {
        width:'700px'
      };

    return(
        <div>
            <Jumbotron style={divStyle}>
                Contact Us 
            </Jumbotron>
            <br/>
            <br/>
            <h2 style={divStyle2}>Quick Enquiry</h2>
            <br/>
            <br/>
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
                        <Col lg={12}>    
                            <h4>We're happy to answer any question you have. Just send us a message in the form below.</h4>
                        </Col>
                    </Row>
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

