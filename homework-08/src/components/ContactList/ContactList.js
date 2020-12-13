import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { phoneBookSelectors, phoneBookOperations } from '../../redux/phoneBook';
import ContactListItem from '../ContactListItem/ContactListItem';

export default function ContactList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(phoneBookOperations.getContacts());
    }, [dispatch]);

    const items = useSelector(phoneBookSelectors.getFiltredContacts);
    return (
        <TransitionGroup component="ul" in={items.length}>
            {items.map(item => (
                <CSSTransition
                    key={item.id}
                    classNames="ContactList-fade"
                    timeout={250}
                >
                    <ContactListItem item={item} />
                </CSSTransition>
            ))}
        </TransitionGroup>
    );
}
