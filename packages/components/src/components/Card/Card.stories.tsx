import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { Typography } from "../Typography";
import { Link } from "../Link";
import { Card, CardContent } from "./";
import "../../styles/main.scss";

storiesOf("Cards", module).add("Regular Card", () => {
  const image = text("Image", "https://source.unsplash.com/800x400/?nature");
  const headerText = text("Header", "Popular tours");
  const bodyText = text(
    "Body",
    "Chosen by our travelers, these tried-and-true favorites bring destinations to live through culturally immersive activities"
  );

  return (
    <Card outline={true}>
      <img src={image} />

      <CardContent>
        <Typography variant="subheader">{headerText}</Typography>
        <Typography variant="body1">{bodyText}</Typography>
        <Link variant="none" href="/test">
          View Tours
        </Link>
      </CardContent>
    </Card>
  );
});
