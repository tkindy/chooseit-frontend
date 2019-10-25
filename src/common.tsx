import React from "react";

export const withHeader = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => (props: P) => (
  <div>
    <h1>ChooseIt</h1>
    <h2>Make decisions with friends</h2>
    <Component {...props} />
  </div>
);
