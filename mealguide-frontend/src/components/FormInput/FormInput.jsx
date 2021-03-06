import { IonIcon } from '@ionic/react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormInput.css'

const FormInput = ({name, Type, placeHolder, validFeedback, invalideFeedback, helpText, Value, icon}) => {
    return (
        <Form.Group id={"form__" + name} className="form-group" style={{marginTop:'20px'}}>
            <Form.Label htmlFor={name} className="form__label sr-only sr-only-focusable">
                {name}:
            </Form.Label>
            <InputGroup>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><IonIcon icon={icon} /></span>
                </div>
                <Form.Control type={Type} name={name} id={name} placeholder={placeHolder} className="form-control check__validation" defaultValue={Value} required />
            </InputGroup>
            <Form.Control.Feedback type="valid">{validFeedback}</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">{invalideFeedback}</Form.Control.Feedback>
            <Form.Text dark>{helpText}</Form.Text>
        </Form.Group>
    )
}

export default FormInput;