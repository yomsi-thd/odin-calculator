# Calculator Web Application

The calculator app is going to contain functions for all of the basic maths operators that's typically found on calculators
- Add `+`
- Subtract `-`
- Multiply `x`
- Divide `/`

A calculator operation will consist of a number, an operator, and another number.
The calculator will store the 1st and 2nd number input by the user and then operate on them 
when the user press the `=` button

The calculator will only do 1 operation at a time. 
If the user clicks on an operator before the previous operation is calculated, 
the operation is then calculated automatically and turned into a sum. 
Then, the sum is used for the calculation for the next operation.

Whenever, the user wants to clear all of previous calculation, they can do the following
- Press on the `Clear` button
- Press on another number after the previous operation is completed.


The way that this calculator was coded, resembles *vaguely* how it works is similar to a real life calculator.

This project's calculator contains the following:
- The Display
- The Buttons of the following types
	- Number
	- Operator
    - Decimal Point
	- Equal
	- Clear
- The Encoder (helping the program understand which button is being pressed & its value)
- The Controller (trafficking the data based on button presses)
- The RAM (the variables)
- The Arithmetic Logic Unit (The list of operation functions & 1 function named operate()')
- The Display Encoder (a function that updates the screen)

The following video below demonstrates how the calculator works in a nutshell with these components (except the ROM).

https://github.com/user-attachments/assets/983d263a-efcf-4e42-9b8f-97fbb4ddc8bd

