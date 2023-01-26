"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = (b**2) - 4 * a * c;
  let root = -b/(2*a);

  if (discriminant === 0) {
    arr.push(root);
  } else if (discriminant > 0) {
    let root1 =  (-b + Math.sqrt(discriminant))/(2*a);
    let root2 = (-b - Math.sqrt(discriminant))/(2*a);
    arr.push(root1, root2);
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) 
    || isNaN(amount) || isNaN(countMonths)) {
      return false;
    }

  let percerntMonth = percent/100/12;
  let creditBody = amount - contribution;
  let monthPayment = creditBody * (percerntMonth + (percerntMonth / (((1 + percerntMonth)**countMonths) - 1)));
  let totalSum = monthPayment * countMonths;

  return +totalSum.toFixed(2);
}