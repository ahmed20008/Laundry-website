import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Dashboard(props: Props) {
  return (
    <>
      <h1>Search</h1>
      <>{props.children}</>
    </>
    
  );
}
