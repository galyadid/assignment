import React from 'react';
import { Button, Form, Input, InputNumber, Modal } from 'antd';
import { Contact} from '../../types/contact';
import './contact-form.css';

interface Props {
    onSubmit: (contact: Contact) => void
    onCancel: () => void;
    existingIds: string[];
}

export const ContactForm: React.FC<Props>  = ({onSubmit, onCancel, existingIds}) => {
    const onModalCancel = () => {
        onCancel();
    }

    const validateId = (rule: any, value: string) => {
         if (existingIds.includes(value)) {
            return Promise.reject('This phone number already exists');
         }

         return Promise.resolve();
    }

    return (
        <Modal open={true} onCancel={onModalCancel} footer={null} title='Create New Contact'>
        <Form onFinish={onSubmit} className='contact-form' labelCol={{ span: 4 }}>
            <Form.Item
            label="Phone"
            name="phone"
            extra="Phone number should be unique"
            rules={[{ required: true, message: 'Please input your phone!' }, { validator: validateId}]}
            >
                <Input />
            </Form.Item>
            <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: 'Please input your age!' }]}
            >
                <InputNumber type='number' min={1}/>
            </Form.Item>
                <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
            >
                <Input />
            </Form.Item>
                <Form.Item
            label="Notes"
            name="notes"
            rules={[{ required: false }]}
            >
                <Input />
            </Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    </Modal>
    )
}