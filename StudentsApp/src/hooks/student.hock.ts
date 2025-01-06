import { useState, useEffect } from "react";
import { IStudent } from "../types";
import { validateStudent } from "../utils/validation";

const INITIAL_STUDENT: IStudent = {
  age: 0,
  coursesList: [],
  id: "",
  isGraduated: false,
  name: "",
  absents: 0,
};

export function useStudentForm(onSubmit: (student: IStudent) => void) {
  const [student, setStudent] = useState<IStudent>(INITIAL_STUDENT);
  const [errorsList, setErrorsList] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("Student form initialized!");
  }, []);

  const handleChange = (field: string, value: any) => {
    setStudent({ ...student, [field]: value });
  };

  const handleCoursesChange = (list: string[]) => {
    setStudent({ ...student, coursesList: list });
  };

  const handleSubmit = () => {
    const newStudent: IStudent = { ...student, id: Date.now().toString() };
    const errors = validateStudent(newStudent);
    if (errors.length > 0) {
      setErrorsList(errors);
    } else {
      setErrorsList([]);
      onSubmit(newStudent);
      handleClear();
    }
  };

  const handleClear = () => {
    setStudent(INITIAL_STUDENT);
  };

  return {
    student,
    errorsList,
    isOpen,
    setIsOpen,
    handleChange,
    handleCoursesChange,
    handleSubmit,
    handleClear,
  };
}
