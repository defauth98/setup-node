const sayHelloWorld = require('./sayHelloWorld');

describe('sayHelloWorld tests', () => {
  it('should say hello world', () => {
    const response = sayHelloWorld.sayHello();

    expect(response).toBe('Hello World');
  });
});
