"use strict";

function getArrayParams(...arr) {

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((acc, number) => {
    return acc+=number; 
  }, 0);
  let avg = +((sum/arr.length).toFixed(2));
  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, number) => acc+=number);
}

function differenceMaxMinWorker(...arr) {
    return (arr.length === 0)? 0 : Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;  
  let sumOddElement = 0;
  if (arr.length === 0) {
    return 0;
  }

  for (const number of arr) {
    if (number%2 === 0) {
      sumEvenElement += number;
    } else {
      sumOddElement += number;
    }  
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0; 
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (const number of arr) {
    if (number%2 === 0) {
      sumEvenElement += number;
      countEvenElement++;
    } 
  }  
  return sumEvenElement/countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (const arr of arrOfArr) {
    const funcResult = func(...arr);
    maxWorkerResult = Math.max(maxWorkerResult, funcResult);
  }

  return maxWorkerResult;
}
