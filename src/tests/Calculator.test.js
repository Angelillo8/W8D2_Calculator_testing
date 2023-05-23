import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  });

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  });

  it('Should be able to add 1 to 4 and get 5', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('5');
  });

  it('Should be able to subtract 4 from 7 and get 3', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('Should be able to multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
  });

  it('Should be able to divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonDivide = container.getByTestId('operator-divide');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('Should be able to concatenate multiple number button clicks', () => {
    const button0 = container.getByTestId('number0');
    const button1 = container.getByTestId('number1');
    const button2 = container.getByTestId('number2');
    const button3 = container.getByTestId('number3');
    const button4 = container.getByTestId('number4');
    const button5 = container.getByTestId('number5');
    const button6 = container.getByTestId('number6');
    const button7 = container.getByTestId('number7');
    const button8 = container.getByTestId('number8');
    const button9 = container.getByTestId('number9');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(button4);
    fireEvent.click(button5);
    fireEvent.click(button6);
    fireEvent.click(button7);
    fireEvent.click(button8);
    fireEvent.click(button9);
    fireEvent.click(button0);
    expect(runningTotal.textContent).toEqual('1234567890');
  });

  it('Should be able to chain multiple operations together', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const button3 = container.getByTestId('number3');
    const button9 = container.getByTestId('number9');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const buttonDivide = container.getByTestId('operator-divide');
    const buttonEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button3);
    fireEvent.click(buttonDivide);
    fireEvent.click(button9);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('2');
  });

  it('Should be able to clear the running total without affecting the calculation', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const button5 = container.getByTestId('number5');
    const buttonAdd = container.getByTestId('operator-add');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const buttonEquals = container.getByTestId('operator-equals');
    const buttonClear = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(buttonAdd);
    fireEvent.click(button1);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button7);
    fireEvent.click(buttonClear);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('15');
  });
});

