import React, { Component } from "react";
import Routers from "./Route";
import { Provider } from "react-redux";
import store from "./store";
import { Field, reduxForm, SubmissionError } from "redux-form";
class App extends Component {
  render() {
    return <Provider store={store} />;
    const submit = ({
      name = "",
      age = "",
      email = "",
      Gender = "",
      City = ""
    }) => {
      let error = {};
      let isError = false;
      if (name.trim() === "") {
        error.name = "Required";
        isError = "true";
      }
      if (name.length > 20) {
        error.name = "too long";
        isError = "true";
      }
      if (age.trim() === "") {
        error.age = "Required";
        isError = "true";
      }
      if ((age.type = "text")) {
        error.age = "only numbers";
        isError = "true";
      }
      if (email.trim() === "") {
        error.email = "Required";
        isError = "true";
      }
      if (isError) {
        error;
        throw new SubmissionError();
      } else {
      }
    };
    const ContactForm = props => {
      const { handleSubmit } = props;

      return (
        <form onSubmit={handleSubmit(submit)}>
          {
            <div>
              <div>
                <label htmlfor="Name">Name</label>
                <Field name="name" component="input" type="text" />
              </div>
              <div>
                <label htmlfor="Age">Age</label>
                <Field name="age" component="input" type="text" />
              </div>
              <div>
                <label htmlfor="Email">Email</label>
                <Field name="email" component="input" type="text" />
              </div>
              <label>Gender</label>
              <div>
                <div>
                  <label>
                    <Field
                      name="Gender"
                      component="input"
                      type="radio"
                      value="male"
                    />{" "}
                    Male
                  </label>
                  <label>
                    <Field
                      name="Gender"
                      component="input"
                      type="radio"
                      value="female"
                    />{" "}
                    Female
                  </label>
                </div>
              </div>
              <div>
                <label>City</label>
                <div>
                  <Field name="City" component="select">
                    <option />
                    <option value="Lucknow">Lucknow</option>
                    <option value="Pune">Pune</option>
                    <option value="Banglore">Banglore</option>
                  </Field>
                </div>
              </div>
              <button type="submit">Submit</button>
            </div>
          }
        </form>
      );
    };
  }
}

export default App;
