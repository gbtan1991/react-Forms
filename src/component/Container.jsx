import React from 'react';
import Header from './Header';
import Form from './Form';

const Container = () => {
  return (
    <div className="grid place-content-center min-h-screen w-full bg-desert-sand ">
      <div className="block lg:flex lg:items-stretch lg:justify-center w-full h-full">
        <Header />
        <Form />
      </div>
    </div>
  );
};

export default Container;
