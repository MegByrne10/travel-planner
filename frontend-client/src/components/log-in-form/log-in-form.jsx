import { useState } from "react";
import { loginUserToDB } from "../../redux/userActions";

const defaultFormFields = {
  email: '',
  password: ''
}
const LoginForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUserToDB(email, password);
      resetFormFields();
    } catch(error) {
      console.log("User login encoutered an error", error);
      alert("User login encoutered an error")
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
          <h3 className="text-center">Log In</h3>

          <form onSubmit={handleSubmit}>
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

            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default LoginForm;
