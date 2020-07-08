import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

class TechSkills extends React.Component {
  render() {
    return (
        <div class="bgDark" id="skills">
             <Container className="skillsWrapper">
                <Row>
                    <Col>
                         <h1><b>Portfolio</b></h1>
                         <hr className="titleHr" />
                    </Col>
                </Row>

                 <Row>
                   <Col>
                     <h4>Fine Art and Travel Photography</h4>
                     <Image src= "images/fineArt1" fluid className="Photopgraph"/>
                     <Image src= "images/fineArt2" fluid className="Photograph"/>
                     <Image src= "images/Travel1" fluid className="Photograph"/>
                   </Col>
                 </Row>
                 <Row>
                   <Col>
                     <h4>Landscape and Nature Photography</h4>
                     <Image src= "images/Landscape1" fluid className="Photograph"/>
                     <Image src="images/Landscape2" fluid className="Photograph"/>
                     <Image src="images/Landscape3" fluid className="Photograph"/>
                   </Col>
                 </Row>
                 <Row>
                   <Col>
                     <h4>Monument and Architecture Photography</h4>
                     <Image src= "images/Monument1" fluid className="Photograph"/>
                     <Image src="images/Monument2" fluid className="Photograph"/>
                     <Image src="images/Monument3" fluid className="Photograph"/>
                     <Image src="images/Monument4" fluid className="Photograph"/>
                   </Col>
                 </Row>
                 <Row>
                   <Col>
                     <h4>Portrait and Street Photography</h4>
                     <Image src="images/Portrait1" fluid className="photograph"/>
                     <Image src="images/Portrait2" fluid className="photograph"/>
                     <Image src="images/Portrait3" fluid className="photograph"/>
                   </Col>
                 </Row>

             </Container>
         </div>
    )
  }
}

export default art;
