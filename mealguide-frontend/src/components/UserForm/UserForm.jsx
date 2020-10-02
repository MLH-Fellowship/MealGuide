import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormInput from '../FormInput/FormInput';
import FormSelect from '../FormSelect/FormSelect';
import { useHistory } from "react-router-dom";
import {personOutline, barbellOutline, bodyOutline, walkOutline, maleFemaleOutline, fastFoodOutline, restaurantOutline, bicycleOutline, bookOutline} from "ionicons/icons"
import './UserForm.css'
const users = JSON.parse(localStorage.getItem('users')) || []
function UserForm({ title, subtitle, body, eventKey, colour, mealTime, id }) {
    const history = useHistory();
    const routeChange = () => {
        let path = `/profile`;
        history.push(path);
    }
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <div class="page__section row align-items-center section__login " data-nav="Login" id="section__register">
			<div class="login__form col-md-6 offset-md-3">
				<Form name="editProfileForm" method="post" action="https://mealguide.herokuapp.com/api/user/addUser">
                    <FormInput
                        name = "Name"
                        Value={users.firstname + " " + users.lastname}
                        Type = "text"
                        placeHolder = "Please enter your full name."
                        validFeedback = "Looks good!"
                        invalideFeedback = "Please enter a valid name."
                        helpText = "Each person's name is really special."
                        icon = {personOutline}
                    />
					<Form.Control type="hidden" name="email" id="email" className="form-control check__validation" defaultValue={email} required />
                    <FormInput
                        name = "Email"
                        Value={users.firstname + " " + users.lastname}
                        Type = "text"
                        placeHolder = "Please enter your full name."
                        validFeedback = "Looks good!"
                        invalideFeedback = "Please enter a valid name."
                        helpText = "Each person's name is really special."
                        icon = {personOutline}
                    />
		    <FormInput
                        name = "Weight"
                        Value={users.weight}
                        Type = "number"
                        placeHolder = "Please Enter your weight in kilograms."
                        validFeedback = "Looks good!"
                        invalideFeedback = "Please enter a valid weight."
                        helpText = "Use online converters to convert your weight from lbs to kg."
                        icon = {barbellOutline}
                    />
                    <FormInput
                        name = "Height"
                        Value={users.height}
                        Type = "number"
                        placeHolder = "Please enter your Height in cm."
                        validFeedback = "Looks good!"
                        invalideFeedback = "Please enter a valid height."
                        helpText = "Use online converters to convert your height from ft to cm."
                        icon = {bodyOutline}
                    />
                    <FormInput
                        name = "Age"
                        Value={users.age}
                        Type = "number"
                        placeHolder = "Please enter your age."
                        validFeedback = "Looks good!"
                        invalideFeedback = "Please enter a valid age."
                        helpText = "This will be used to calculate your caloric requirements."
                        icon = {walkOutline}
                    />
                    <FormSelect
                        name = "Gender"
                        Value={users.gender}
                        Options = {["Male", "Female", "Non-Binary"]}
                        validFeedback = "Looks good!"
                        invalideFeedback = "Please enger a valid gender."
                        helpText = "Each gender have different caloric requirements."
                        icon = {maleFemaleOutline}
                    />
                    <FormSelect
                        name = "Preference"
                        Value = {users.preference}
                        Options = {["Non-Vegetarian", "Vegetarian", "Vegan", "Halal", "Kosher"]}
                        validFeedback = "Looks good!"
                        invalideFeedback = "Please select a valid option."
                        helpText = "Please let us know what are your dietary preference."
                        icon = {restaurantOutline}
                    />
                    <FormSelect
                        name = "College"
                        Value={users.college}
                        Options = {["Harvard University"]}
                        validFeedback = "Looks good!"
                        invalideFeedback = "Please select a valid option."
                        helpText = "Where do you study?"
                        icon = {bookOutline}
                    />
                    <FormSelect
                        name = "Goal"
                        Value = {users.goal}
                        Options = {["Maintain Weight", "Gain Weight", "Lose Weight"]}
                        validFeedback = "Looks good!"
                        invalideFeedback = "Please select a valid option."
                        helpText = "Please let us know what are your fitness goal."
                        icon = {bicycleOutline}
                    />
					<InputGroup class="form__buttons" style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end"}}>
                        <Button variant="outline-dark"  onClick={routeChange} href='/profile' style={{paddingLeft:"10px", marginLeft:"10px", marginBottom:'10px'}}>Back</Button>
						<Button variant="danger" type="reset" name="reset" id="reset" style={{paddingLeft:"10px",marginLeft:"10px", marginBottom:'10px'}}>Reset</Button>
						<Button variant="success" type="submit" style={{paddingLeft:"10px",marginLeft:"10px", marginBottom:'10px'}}>Update</Button>
					</InputGroup>
				</Form>
			</div>
		</div>
    )
}

export default UserForm;
