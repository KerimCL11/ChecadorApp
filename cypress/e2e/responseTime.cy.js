describe('Employee Registration for Dining Area', () => {
  // Define an array of employee numbers to test
  const employeeNumbers = ['12345', '67890', '54321'];

  employeeNumbers.forEach((number) => {
    it(`successfully registers an employee with number ${number}`, () => {
      cy.visit('http://localhost:5173/')

      cy.get('input[placeholder="Numero de empleado"]').type(number)

      cy.get('input[placeholder="Confirmar numero de empleado"]').type(number)

      cy.get('input[value="Registrar entrada"]').click()
      cy.on('window:alert', (text) => {
        expect(text).to.contains('successfully registered');
      });
    });
  });
});
