import React from "react";

const styles = {
  padding: "20px"
};
export const storyWrapper = (storyFn: any) => (
  <div style={styles}>{storyFn()}</div>
);
