import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './About.css';
export default class About extends Component{
    render() {
        const divStyle = {
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
                    About US
                </Jumbotron>
                <br/>
                <br/>
                <p>We consider ourselves as tech visionaries and aspire to help our clients solve the greatest problems by using high tech solutions. We provide tech solutions such as Machine and Deep Learning, Data Analytics and IOT services as well as Web and Mobile App Development.</p>
                <p>Our company consists of individuals with experience ranging from technology to business solutions to academic research and development. We analyse customer’s requirement and provide the best solution to meet customer’s expectation.</p>
                <br/>
                <br/>
                <h style={divStyle}>Leave a Comment</h>
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

