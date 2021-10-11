import { Container, Row, Col, Image, Button } from 'react-bootstrap';


const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {
    return (
        <Container className='card-container' fluid >
            <Row className='card-row'>
                <Col className='image-col' xs>
                    <Image src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} width='96' roundedCircle fluid />
                </Col>
                <Col xs={8}>
                    <p>{firstName} {lastName}</p>
                    <p>{phoneNumber}</p>
                </Col>
                <Col className='button-col' xs>
                <button className='contact-button'>X</button>
                </Col>
            </Row>
            
        </Container>
    )
}

export default ContactCard