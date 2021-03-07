import React from 'react';

type HeaderProps = {
  headerText: string;
};

export default function Header(props: HeaderProps) {
  return <h1 className='m-2 font-bold'>{props.headerText}</h1>;
}
