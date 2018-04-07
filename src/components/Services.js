import React, { Component } from 'react';
import { Col, Row, Image, Jumbotron, Button } from 'react-bootstrap';
import './Services.css';

export default class Services extends Component{
    render() {
        
          const divStyle = {
            textAlign: 'center',
            textDecoration: 'underline'
          };
          const divStyle2 = {
            textDecoration: 'underline'
          };
          const divStyle3 = {
            height:'400px',
            width:'700px'
          };

          const divStyle4 = {
            width:'700px'
          };

          const divStyle5 = {
            padding:'35px'
          };

        return(
            <div>
                <Jumbotron style={divStyle2}>
                    About US
                </Jumbotron>
                <br/>
                <br/>
                <h1 style={divStyle}>Machine Learning & Data Analytics</h1>
                <br/>
                <Row style={divStyle}>
                    <Col xs={12} sm={3} className="person-wrapper">
                        <Image src="assets\serv1.png" className="profile-pic"/>
                        <h1>Big Data</h1>
                    </Col>    
                    <Col xs={12} sm={3} className="person-wrapper">
                        <Image src="assets\serv2.png" className="profile-pic"/>
                        <h1>Statistics</h1>
                    </Col>
                    <Col xs={12} sm={3} className="person-wrapper">
                        <Image src="assets\serv3.png" className="profile-pic"/>
                        <h1>Algorithm & Charts</h1>
                    </Col>
                    <Col xs={12} sm={3} className="person-wrapper">
                        <Image src="assets\serv4.png" className="profile-pic"/>
                        <h1>Trend Prediction</h1>
                    </Col>    
                </Row>
                <div>   
                    <div>But what does all this mean? I still don’t get it?</div>
                    <div>Think about how you view a video on Youtube. Do you realize when you scroll down there are recommended videos there for you to choose from.</div> 
                </div>
                <br/>
                <div>
                    <div>How is that possible?</div>
                    <div>Well the computer is basically studying, analyzing and understanding the types of videos you have searched or viewed and based on that data, it has compiled a list of video that are related to the video that you just viewed or searched for.</div>    
                </div>

                <Jumbotron style={divStyle5}>
                    <h2 style={divStyle}>Website Development & Content Management</h2>
                    <Row>
                        <Col xs={12} sm={6}>
                            <li>Website Plaform (HTML, CSS, PHP)</li>
                            <li>Creation Domain Name & Web Hosting Platform (for new development of websites)</li>
                            <li>Content Management System</li>
                            <li>Search Engine Optimization</li>
                            <br/>
                            <p>If you already have an existing website, we can revamp and re-create a new look and feel to your website, with simple and easy features that will draw new target audience to your website.</p>
                            <br/>
                            <p>Enhance content management system by organizing images, videos, audios and text that can be stored and retrieved easily. Use specific keyword clusters that will link target audience to your website with search engine optimization.</p>
                        </Col>
                        <Col xs={12} sm={6}>
                            <Image src="assets\Web.png"/>
                        </Col>
                    </Row>
                </Jumbotron>
                
                <h2 style={divStyle}>Mobile App Development</h2>
                    <Row>
                        <Col xs={12} sm={6}>
                            <Image src="assets\Mobile.png"/>
                        </Col>
                        <Col xs={12} sm={6}>
                            <li>Android, IOS & Hybrid Platforms</li>
                            <li>Realtime database</li>
                            <li>Cloud Storage</li>
                            <li>Hosting</li>
                            <br/>
                            <h3>Still not sure how an app can help your business??</h3>
                            <h5>For example, site engineers have to manually update their checklist and then submit their report upon returning to the company after the site visit. This could take days if it is an outstation site visit. We have developed a checklist app for these engineers to help reduce their lead time of submitting their report to their supervisors and customers. This enhances employee productivity and customer satisfactions.</h5>
                        </Col>
                    </Row>
                    <br/>
                <br/>
                <h>Leave a Comment</h>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <div>
                        {/* Name field */}
                        <input  type="text" placeholder="Name"></input>
                    </div>
                    <br/>
                    <div>
                        {/* Email field */}
                        <input  type="Email" placeholder="Email"></input>
                    </div>
                    <br/>
                    <div>
                        {/* Message textarea */}
                        <textarea style={divStyle3} placeholder="Message"></textarea>
                    </div>
                    <br/>
                    <div>
                        {/* Submit Button */}
                        <Button style={divStyle4} >Submit</Button>   
                    </div> 
					<br/>					
                </div>        
            </div>    
        );
    }
}

