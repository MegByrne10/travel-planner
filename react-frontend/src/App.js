import { GoBell, GoBeaker } from "react-icons/go";
import Button from "./components/ui/Button";
import FloatingLabelInput from "./components/ui/FloatingLabelInput";

function App() {
  return (
    <div className="container justify-center mx-auto px-4">
      <h1 className="text-3xl font-bold underline">
        Buttons
      </h1>
      <div className="mb-3">
        <Button primary className="mx-1">
          Primary Button
        </Button>
        <Button secondary rounded className="mx-1">Secondary Rounded</Button>
        <Button success className="mx-1">
          Success
          <GoBeaker />
        </Button>
        <Button info className="mx-1">
          Info
        </Button>
        <Button accent className="mx-1">
          Accent
        </Button>
        <Button warning className="mx-1">
          Warning
          <GoBell />
        </Button>
        <Button danger className="mx-1">Danger</Button>
        <Button danger disabled className="mx-1">Danger Disabled</Button>
        <Button neutral className="mx-1">Danger</Button>
      </div>
      <div>
        <Button primary outline className="mx-1">Primary Outline</Button>
        <Button secondary outline className="mx-1">Secondary Outline</Button>
        <Button success outline className="mx-1">Success Outline</Button>
        <Button success outline disabled className="mx-1">Success Outline Disabled</Button>
        <Button info outline rounded className="mx-1">Info Outline Rounded</Button>
        <Button accent outline className="mx-1">Accent Outline</Button>
        <Button warning outline className="mx-1">Warning Outline</Button>
        <Button danger outline className="mx-1">Danger Outline</Button>
        <Button neutral outline className="mx-1">Danger Outline</Button>
      </div>

      <h1 className="mt-5 text-3xl font-bold underline">
        Floating Label Input
      </h1>
      <div className="items-center">
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-nuetral-900">Example Form with Floating Inputs</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <FloatingLabelInput name="first_name">First Name</FloatingLabelInput>
              <FloatingLabelInput type="email" name="email">Email</FloatingLabelInput>
              <FloatingLabelInput type="password" name="password">Password</FloatingLabelInput>
              <FloatingLabelInput type="number" name="age">Age</FloatingLabelInput>

              <div>
                <Button type="submit" primary className="w-full">Submit Something</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
