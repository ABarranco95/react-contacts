import { Container, Row, Image } from 'react-bootstrap'

const  ContactDetailsCard = ({ contact }) => {
    return (
        <Container>
            <Row>
                <Image src={contact?.profilePic} rounded alt={`Profile of ${contact?.firstName}${contact?.lastName}.`}/>
            </Row>
            <Row>
                <p>{contact?.firstName} {contact?.lastName}</p>
                <dl>
                    <dt>Phone Number</dt>
                    <dd>{contact?.phoneNumber}</dd>

                    <dt>Email</dt>
                    <dd>{contact?.email}</dd>

                    <dt>Address</dt>
                    <dd>{contact?.address}</dd>
                </dl>
            </Row>
        </Container>
    )
}

export default ContactDetailsCard;