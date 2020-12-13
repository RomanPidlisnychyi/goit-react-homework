import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Title, Input, Button } from './styles';
import { phoneBookOperations } from '../../redux/phoneBook';

export default function ContactForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const avalibleContact = name !== '' && number !== '';
    const handlerSubmit = e => {
        e.preventDefault();
        dispatch(phoneBookOperations.setContact(name, number));
        setName('');
        setNumber('');
    };

    return (
        <Form onSubmit={handlerSubmit}>
            <Title>Name</Title>
            <Input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <Title>Number</Title>
            <Input
                type="text"
                value={number}
                onChange={e => setNumber(e.target.value)}
            />
            <br />
            <Button type="submit" disabled={!avalibleContact}>
                Add contact
            </Button>
        </Form>
    );
}
