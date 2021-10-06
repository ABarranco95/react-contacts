import { Container, Row, Col, Image, Button } from 'react-bootstrap';


const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {
    return (
        <Container className='card-container' fluid >
            <Row>
                <Col xs={6} md={4}>
                    <Image src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} width='96' roundedCircle fluid />
                </Col>
                <Col xs={6} md={4}>
                    <p>{firstName} {lastName}</p>
                    <p>{phoneNumber}</p>
                </Col>
                <Col xs={6} md={4}>
                <Button variant='secondary' size='sm'>X</Button>
                </Col>
            </Row>
            
        </Container>
    )
}

export default ContactCard;