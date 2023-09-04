import { Modal, Row, Col } from 'antd';
import { Contact } from '../../types/contact';
import './contact-modal.css'

interface Props {
    contact: Contact;
    onModalClose: () => void;
}

export const ContactModal:  React.FC<Props>  = ({contact, onModalClose}) => {

    const onCancel = () => {
        onModalClose();
    }

    return (
        <Modal open={true} title='Contact Information' onCancel={onCancel} footer={null} className='contact-modal'>
            <div>
            <Row>
                <Col span={4}>
                    <p className='contact-modal-label'>Name:</p>
                </Col>
                <Col>
                    <p>{contact.name}</p>
                </Col>
            </Row>
            <Row>
                <Col span={4}>
                    <p className='contact-modal-label'>Phone:</p>
                </Col>
                <Col>
                    <p>{contact.phone}</p>
                </Col>
            </Row>
            <Row>
                <Col span={4}>
                    <p className='contact-modal-label'>Age:</p>
                </Col>
                <Col>
                    <p>{contact.age}</p>
                </Col>
            </Row>
            <Row>
                <Col span={4}>
                    <p className='contact-modal-label'>Email:</p>
                </Col>
                <Col>
                    <p>{contact.email}</p>
                </Col>
            </Row>
            <Row>
                <Col span={4}>
                    <p className='contact-modal-label'>Notes:</p>
                </Col>
                <Col>
                    <p>{contact.notes}</p>
                </Col>
            </Row>
            </div>
        </Modal>
    )
}