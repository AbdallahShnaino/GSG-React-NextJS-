export enum BUTTON_TYPE {NUMBER,ACTION}

export interface MathOperation {
    operand1:number
    operand2:number
    operator:string
  }
export interface MathOperation {
    operand1:number
    operand2:number
    operator:string
  }

 export function calculateExpression(input:string) {
    const numbers = input.split(/[-+]/).map(Number); // Extract numbers
    const operators = input.split(/\d+/).filter(op => op); // Extract operators
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "+") {
            result += numbers[i + 1];
        } else if (operators[i] === "-") {
            result -= numbers[i + 1];
        }
    }
    return result;
}
