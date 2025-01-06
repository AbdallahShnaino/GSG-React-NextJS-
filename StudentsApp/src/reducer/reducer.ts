import { useEffect } from "react";
import useLocalStorage from "../hooks/local-storage.hook";
import { IStudent } from "../types";

interface IState {
  students: IStudent[];
  totalAbsent: number;
}
enum ReducerOperation {
  ADD_STUDENT,
  CHANGE_ABSENT,
  REMOVE_FIRST,
  ON_INIT,
}
type IAction =
  | { type: ReducerOperation.ADD_STUDENT; payload: IStudent }
  | { type: ReducerOperation.CHANGE_ABSENT; id: string; change: number }
  | { type: ReducerOperation.REMOVE_FIRST }
  | { type: ReducerOperation.ON_INIT; payload: IStudent[] };

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ReducerOperation.ADD_STUDENT: {
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    }
    case ReducerOperation.CHANGE_ABSENT: {
      const changeAbsent = state.students.map((std) =>
        std.id === action.id
          ? { ...std, absents: std.absents + action.change }
          : std
      );

      return {
        ...state,
        students: changeAbsent,
        totalAbsent: state.totalAbsent + action.change,
      };
    }
    case ReducerOperation.REMOVE_FIRST: {
      let students = [...state.students];
      students.shift();
      return {
        ...state,
        students,
      };
    }
    case ReducerOperation.ON_INIT: {
      const totalAbsent = action.payload.reduce(
        (prev, cur) => prev + cur.absents,
        0
      );

      return {
        ...state,
        students: action.payload,
        totalAbsent,
      };
    }
    default: {
      return state;
    }
  }
};
export { reducer, ReducerOperation };
