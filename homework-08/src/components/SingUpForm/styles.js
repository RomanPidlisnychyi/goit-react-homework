import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { mail, passw, user } from '../../images';

const Span = styled.span`
    color: red;
    position: absolute;
    bottom: -75%;
    left: 0;
`;

const MyButton = styled(Button)`
    display: block;
    margin: 15px auto 0;
    width: fit-content;
`;

const MyLink = styled(Link)`
    display: block;
    margin: 15px auto 0;
    width: fit-content;
`;

const FormGroup = styled(Form.Group)`
    margin-bottom: 30px;
    position: relative;
    display: flex;
`;

const EmailLabel = styled(Form.Label)`
    position: absolute;
    top: 50%;
    left: -50px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background: url(${mail}) center/contain no-repeat;
`;

const EmailInput = styled(Form.Control)`
    &:focus {
        border-color: ${props => (props.isValid ? '#80bdff' : 'red')};
    }
`;

const PasswordLabel = styled(EmailLabel)`
    background: url(${passw}) center/80% no-repeat;
`;

const PasswordInput = styled(EmailInput)``;

const UserLabel = styled(PasswordLabel)`
    background-image: url(${user});
`;

export default {
    Span,
    MyButton,
    MyLink,
    EmailLabel,
    EmailInput,
    PasswordLabel,
    PasswordInput,
    UserLabel,
    FormGroup,
};
