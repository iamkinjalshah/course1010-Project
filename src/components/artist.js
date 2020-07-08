import React, { Component } from 'react';
import profile from '../profile-pic.jpeg'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import lozad from 'lozad';

class About extends Component {
  render() {
    const observer = lozad();
    observer.observe();
    return (
        <div>
            <Container className="aboutWrapper">
              <Row id="aboutTitle">
                <Col>
                    <h1><b>About Me</b></h1>
                    <hr className="titleHr"/>
                </Col>
              </Row>
                  <div className='contactIconContainer'>
                    <img className="lozad" img src={profile} alt="profile_pic" id='myPic'/>
                    <div className="icons">
                      <a href="https://github.com/kinjalshahphotography" rel="noopener noreferrer" target="_blank"><i class="fab fa-github fa-2x" ></i></a>
                      <a href="https://ca.linkedin.com/in/kinjalshahphotography" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin fa-2x" ></i></a>
                      <a href="https://www.facebook.com/kinjalshahphotography" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook-square fa-2x"></i></a>
                      <a href="mailto: kinjalshahphotography@gmail.com" rel="noopener noreferrer" target="_blank"><i class="fas fa-envelope-open-text fa-2x" ></i></a>
                    </div>
                  </div>
                  <div className='aboutText'>
                    <p>My name is Kinjal Shah. Thank you for your interest in my work. I am a self-taught fine art and landscape and nature photographer specializing in large format, museum quality limited edition photographic prints with a broad base of collectors and fans around the world. Born and raised in India, I currently live in Toronto, Canada with my beloved husband and our two amazing children, Shourya & Kavir.  <br>
                    <br>My goal as a fine art photographer is to show you views of our world in ways that you may not have seen them before through careful composition, attention to detail and the creative use of beautiful light. The entire collection of my work is available in the form of fine art prints using only the highest quality printing and mounting processes available today including FujiFlex Crystal Archive, Lumachrome HD Acrylic and ChromaLuxe Aluminum panels.  
                    <br><br>Comprised of my greatest works, my limited edition collections carry strict production limits between 50 and 200, depending on the piece and regardless of medium or size produced. A piece that has reached its production limit will be retired, never produced again as a fine art print. Each piece from my collection is signed and numbered and includes a matching Certificate of Authenticity provided as additional provenance.    
                    <br><br>I consider myself very fortunate that my work is so well recieved, with many finished pieces selling each week in sizes up to 120 inches wide. In addition to my standard limited editions, one Artist Proof (AP) and one First Printing (FP) are available for each piece in my collection.  
                    <br><br>I take great pride in making myself available to my customers and my customer reviews from past clients speak for themselves. I look forward to answering any questions you may have and can be reached via email and telephone around the clock. I return all inquiries within 12-24 hours. Thank you again for your interest in my work. Please return regularly to see my newest releases and consider sharing this website with your friends and families. </p>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
        </div>
    )
  }
}

export default Artist;
