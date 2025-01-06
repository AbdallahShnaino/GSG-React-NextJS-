import { useEffect, useReducer } from "react";
import "./App.css";

import Student from "./components/student/student.component";
import AddForm from "./components/add-form/add-form.component";
import useLocalStorage from "./hooks/local-storage.hook";
import { ReducerOperation as Operation, reducer } from "./reducer/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    totalAbsent: 0,
    students: [],
  });
  const { storedData } = useLocalStorage(state.students, "students-list");
  useEffect(() => {
    if (storedData) {
      dispatch({ type: Operation.ON_INIT, payload: storedData || [] });
    }
  }, [storedData]);

  const h1Style = { color: "#69247C", fontSize: "24px" };

  return (
    <div className="main wrapper">
      <h1 style={h1Style}>Welcome to GSG React/Next Course</h1>
      <AddForm
        className="addForm"
        onSubmit={(newStudent) =>
          dispatch({ type: Operation.ADD_STUDENT, payload: newStudent })
        }
      />
      <div className="stats">
        <button onClick={() => dispatch({ type: Operation.REMOVE_FIRST })}>
          POP Student
        </button>
        <b style={{ fontSize: "12px", fontWeight: 100, color: "gray" }}>
          Total Absents {state.totalAbsent}
        </b>
      </div>
      {state.students.map((student) => (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          age={student.age}
          absents={student.absents}
          isGraduated={student.isGraduated}
          coursesList={student.coursesList}
          onAbsentChange={(id, change) =>
            dispatch({ type: Operation.CHANGE_ABSENT, id, change })
          }
        />
      ))}
    </div>
  );
}

export default App;
