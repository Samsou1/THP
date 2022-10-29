import React from 'react';
import { faker } from '@faker-js/faker';
import Customer from './customer.jsx';

const Customers = () => {
  const customersList = Array.from({ length: 100 }, () => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    job: faker.name.jobTitle(),
  }));

  return (
    <ul>
      {customersList.map((customerData) => (
        <Customer data={customerData} key={customerData.id} />
      ))}
    </ul>
  );
};

export default Customers;