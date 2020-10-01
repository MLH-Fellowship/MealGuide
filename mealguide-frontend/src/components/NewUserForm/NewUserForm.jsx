import React , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import xmlhttprequest from 'xmlhttprequest';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import FormInput from '../FormInput/FormInput';
import FormSelect from '../FormSelect/FormSelect';
import { useHistory } from "react-router-dom";
import { barbellOutline, bodyOutline, fastFoodOutline, restaurantOutline, bicycleOutline, bookOutline } from "ionicons/icons"
import './NewUserForm.css'
var url = new URL(window.location.href);
const email = url.searchParams.get("email");
function UserForm({ title, subtitle, body, eventKey, colour, mealTime, id }) {
    const history = useHistory();
    const routeChange = () => {
        let path = `/index`;
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
    function postSubmit () {
        var url = new URL(window.location.href);
        console.log(url.searchParams.get("email"))
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://mealguide.herokuapp.com/api/user/addUser", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            email : email
        }));

        xhr.onload = function () {
            var data = JSON.parse(this.responseText);
            console.log(data);
        }
    }
    return (
        <div className="page__section row align-items-center section__login " data-nav="Login" id="section__register">
            <div className="login__form col-md-6 offset-md-3">
                <h5 className="section__heading display-3 text-center mb-5">
                    Getting to Know You!!
				</h5>
                <Form method='post' action="http://mealguide.herokuapp.com/api/user/addUser">
                    <FormInput
                        name="Weight"
                        Value=""
                        Type="number"
                        placeHolder="Please Enter your weight in kilograms."
                        validFeedback="Looks good!"
                        invalideFeedback="Please enter a valid weight."
                        helpText="Use online converters to convert your weight from lbs to kg."
                        icon={barbellOutline}
                    />
                    <FormInput
                        name="Height"
                        Value=""
                        Type="number"
                        placeHolder="Please enter your Height in cm."
                        validFeedback="Looks good!"
                        invalideFeedback="Please enter a valid height."
                        helpText="Use online converters to convert your height from ft to cm."
                        icon={bodyOutline}
                    />
                    {/* <FormInput
                        name="Meals"
                        Value=""
                        Type="number"
                        placeHolder="How many meals do you eat per day?"
                        validFeedback="Looks good!"
                        invalideFeedback="Please enter a valid no."
                        helpText="This will be used to suggest proper dishes in each meals."
                        icon={fastFoodOutline}
                    /> */}
                    <FormSelect
                        name="Preference"
                        Value=""
                        Options={["Non-Vegetarian", "Vegetarian", "Vegan", "Halal", "Kosher"]}
                        validFeedback="Looks good!"
                        invalideFeedback="Please select a valid option."
                        helpText="Please let us know what are your dietary preference."
                        icon={restaurantOutline}
                    />
                    <FormSelect
                        name="College"
                        Value=""
                        Options={["Harvard University"]}
                        validFeedback="Looks good!"
                        invalideFeedback="Please select a valid option."
                        helpText="Where do you study?"
                        icon={bookOutline}
                    />
                    <FormSelect
                        name="Goal"
                        Value=""
                        Options={["Maintain Weight", "Gain Weight", "Lose Weight"]}
                        validFeedback="Looks good!"
                        invalideFeedback="Please select a valid option."
                        helpText="Please let us know what are your fitness goal."
                        icon={bicycleOutline}
                    />
                    <InputGroup className="form__buttons" style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", justifyContent: "flex-end" }}>
                        <Button variant="outline-dark" onClick={routeChange} href='/index' style={{ paddingLeft: "10px", marginLeft: "10px", marginBottom: '10px' }}>Back</Button>
                        <Button variant="danger" type="reset" name="reset" id="reset" style={{ paddingLeft: "10px", marginLeft: "10px", marginBottom: '10px' }}>Reset</Button>
                        <Button variant="success" type="submit" name="register" id="register" style={{ paddingLeft: "10px", marginLeft: "10px", marginBottom: '10px' }}>Submit</Button>
                    </InputGroup>
                </Form>
            </div>
        </div>
    )
}

export default UserForm;