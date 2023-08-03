import { useState } from "react";
import { GoBell, GoBeaker } from "react-icons/go";
import Button from "../components/ui/Button";
import FloatingLabelInput from "../components/ui/FloatingLabelInput";
import Dropdown from "../components/ui/Dropdown";
import ExpandablePanel from "../components/ui/ExpandablePanel";

function StyledComponents() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    {label: 'Red', value: 'red' },
    {label: 'Blue', value: 'blue' },
    {label: 'Green', value: 'green' },
  ]

  const expandableHeader = <>
    <Button accent small className="mr-3">Some Action</Button>
    The Name of the Header
  </>
  const headerOne = <>
    <Button secondary small className="mr-3">Another Action</Button>
    Nested Header 1
  </>
  const headerTwo = <>
    <Button secondary small className="mr-3">Another Action</Button>
    Nested Header 2
  </>

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
      <div>
        <h1 className="mt-5 text-3xl font-bold underline">Expandable Panels</h1>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <ExpandablePanel header={expandableHeader}>
            <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            </p>
            <ExpandablePanel header={headerOne}>
              <p>
              Etiam fermentum eleifend elit tristique tempor. Aenean eu nisl ultrices, vulputate justo quis, bibendum enim. Sed at massa feugiat eros suscipit aliquam et nec leo. Nulla varius sapien eu mattis feugiat. Etiam ut dignissim velit. Praesent a est a eros sagittis commodo sit amet vel nulla. Nam sodales nunc id tempor elementum. Suspendisse nec semper arcu, vitae lacinia urna. Duis nec hendrerit nisi. Phasellus rhoncus mauris mi, sit amet volutpat dui suscipit non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisis, nunc ac gravida tincidunt, diam justo egestas mauris, ac commodo metus quam non felis. Fusce vehicula bibendum sapien et suscipit.
              </p>
            </ExpandablePanel>
            <ExpandablePanel header={headerTwo}>
              <p>
              Aliquam feugiat nec tortor ut aliquam. Vestibulum ac turpis eget arcu molestie elementum. Aenean dictum porta odio vel euismod. Etiam non vehicula justo, ut interdum mi. Integer pharetra eleifend mi, id faucibus leo tincidunt et. In velit nunc, feugiat at ultrices vitae, porta facilisis ex. Fusce congue congue nisi non posuere. Aenean imperdiet id ex viverra tristique. Phasellus elementum mollis urna nec blandit. Integer placerat pretium mi vitae ullamcorper.
              </p>
            </ExpandablePanel>
          </ExpandablePanel>
        </div>
      </div>

      <div>
        <h1 className="mt-5 text-3xl font-bold underline">Dropdown</h1>
        <div className="flex">
          <Dropdown options={options} value={selection} onChange={handleSelect} />
        </div>
      </div>
    </div>
  )
};

export default StyledComponents;