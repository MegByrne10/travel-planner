import { useState } from "react";
import Button from "../../ui/Button";
import FloatingLabelInput from "../../ui/FloatingLabelInput";

function LoginForm() {
  const[firstName, setFristName] = useState('');
  const[email, setEmail] = useState('');


  return (
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-nuetral-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <FloatingLabelInput 
            name="first_name"
            value={firstName}
            onChange={(v) => setFristName(v.target.value)}
          >
            First Name
          </FloatingLabelInput>
          <FloatingLabelInput
            type="email" 
            name="email"
            value={email}
            onChange={(v) => setEmail(v.target.value)}
          >
            Email
          </FloatingLabelInput>
          <FloatingLabelInput type="password" name="password">Password</FloatingLabelInput>
          <FloatingLabelInput type="number" name="age">Age</FloatingLabelInput>

          <div>
            <Button type="submit" primary className="w-full">Sign in</Button>
            {/* <div class="mt-2 text-sm">
              <a href="#" class="font-semibold text-info-600 hover:text-info-500">Forgot password?</a>
            </div> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;