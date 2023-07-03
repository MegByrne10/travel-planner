import { useState } from "react";
import { createUserFromEmailAndPassword } from "../../redux/userActions";

const defaultFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await createUserFromEmailAndPassword(firstName, lastName, email, password, confirmPassword);

      console.log(response);

      alert("User creation successful")
      resetFormFields();
    } catch(error) {
      console.log("User creation encoutered an error", error);
      alert("User creation encoutered an error")
    }
  };  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <h3 className="text-center">Sign up with your email and password</h3>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">  
                <label className="form-label">First Name</label>
                <input 
                  className="form-control"
                  type="text" 
                  required onChange={handleChange} 
                  name="firstName" 
                  value={firstName}
                />
              </div>
              <div className="col">
                <label className="form-label">Last Name</label>
                <input 
                  className="form-control"
                  type="text" 
                  required onChange={handleChange} 
                  name="lastName" 
                  value={lastName}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input 
                className="form-control"
                type="email" 
                required 
                onChange={handleChange} 
                name="email" 
                value={email}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input 
                className="form-control"
                type="password" 
                required 
                onChange={handleChange} 
                name="password" 
                value={password}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input 
                className="form-control"
                type="password" 
                required 
                onChange={handleChange} 
                name="confirmPassword" 
                value={confirmPassword}
              />
            </div>

            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default SignUpForm;
