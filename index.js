// Declare customerName in global scope
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(name) {
  bestCustomer = name;
}

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = 'initial value';
  leastFavoriteCustomer = 'attempted reassignment'; // This should cause an error
}
