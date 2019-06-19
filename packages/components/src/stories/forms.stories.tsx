import React from "react";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import { TextInput, Radio, RadioGroup, ValidationMessage } from "../components";

import { boolean, text } from "@storybook/addon-knobs";

storiesOf("Forms", module)
  .add("Text input", () => {
    return <TextInput id="text-input-one" label="This is a text input" />;
  })

  .add("Text input: disabled", () => {
    return (
      <TextInput
        id="text-input-disabled"
        label="This is a disabled text input"
        disabled={true}
      />
    );
  })

  .add("Text input: Warning / Error", () => {
    return (
      <React.Fragment>
        <TextInput
          error="Something is wrong!"
          id="text-input-one"
          label="This is a text input with an error"
        />
        <TextInput
          id="text-input-one"
          label="This is a text input with a warning"
          warning="Something doesn't look right."
        />
        <TextInput
          id="text-input-one"
          label="This is a text input with a warning"
          warning={
            <p>
              This is a <strong>warning</strong> that is a JSX element with a{" "}
              <a href="#">link in it</a>. JSX content should be limited to
              paragraph tags and inline markup (e.g., italic, bold).
            </p>
          }
        />
      </React.Fragment>
    );
  })

  .add("Radio input", () => {
    return (
      <RadioGroup name="radio-demo">
        <Radio label="Radio option 1" value="one" key="one" />
        <Radio label="Radio option 2" value="two" key="two" />
      </RadioGroup>
    );
  })

  .add("Radio input with expanding children", () => {
    const checked = boolean("Radio checked", false);

    return (
      <RadioGroup
        name="radio-demo"
        value={checked ? "one" : "false"}
        onChange={() => true}
      >
        <Radio
          label="Radio with expanding children"
          value="one"
          key="one"
          showChildrenWhenChecked={true}
        >
          This one only appears when the radio input is checked.
        </Radio>
      </RadioGroup>
    );
  })
  .add("Radio input: with legend", () => {
    return (
      <RadioGroup legend="With legend" name="radio-one">
        <Radio value="one-one" label="This is option one" />
        <Radio value="one-two" label="This is option two" />
      </RadioGroup>
    );
  });
