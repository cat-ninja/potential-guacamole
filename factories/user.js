const Factory = require('rosie').Factory;
const faker = require('faker');

module.exports = new Factory()
  .attr('email', () => faker.internet.exampleEmail())
  .attr('first_name', () => faker.name.firstName())
  .attr('last_name', () => faker.name.lastName())
  .attr('password', () => faker.internet.password(30, false, '', '!'));
