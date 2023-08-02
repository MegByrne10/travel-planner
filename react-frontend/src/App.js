import { GoBell, GoBeaker } from "react-icons/go";
import Button from "./components/ui/Button";

function App() {
  return (
    <div className="container mx-auto px-4">
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
      </div>
      <div>
        <Button primary outline className="mx-1">Primary Outline</Button>
        <Button secondary outline className="mx-1">Secondary Outline</Button>
        <Button success outline className="mx-1">Success Outline</Button>
        <Button info outline rounded className="mx-1">Info Outline Rounded</Button>
        <Button accent outline className="mx-1">Accent Outline</Button>
        <Button warning outline className="mx-1">Warning Outline</Button>
        <Button danger outline className="mx-1">Danger Outline</Button>
      </div>
    </div>
  )
}

export default App;
