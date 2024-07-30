import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import CourseForm from "./CourseForm";
import CourseList from "./pages/AllCoursePage";
import CourseDetails from "./CourseDetails";
import { Course } from "./types/Course";
const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Programming",
    description: "Learn the basics of programming.",
    price: 99.99,
    tasks: [],
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    description: "Master advanced concepts in JavaScript.",
    price: 149.99,
    tasks: [],
  },
];

const App: React.FC = () => {
  return (
    <Router>
      <NavBar/>
      <div className="main-content">
      <Routes>
        <Route path="/courses" element={<CourseList courses={courses} />} />
        {/* <Route
            path="/add-course"
            element={<CourseForm addCourse={addCourse} />}
          /> */}
        <Route
          path="/course/:id"
          element={<CourseDetails courses={courses} />}
        />
      </Routes>
      </div> 
    </Router>
  );
};

export default App;
