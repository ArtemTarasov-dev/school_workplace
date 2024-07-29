import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import CourseForm from './CourseForm';
import CourseList from './CourseList';
import CourseDetails from './CourseDetails';
import './App.css';

interface Course {
  id: number;
  title: string;
  tasks: { id: number; description: string }[];
}

const App: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const addCourse = (course: Course) => {
    setCourses([...courses, course]);
  };

  return (
    <Router>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/courses" element={<CourseList courses={courses} />} />
          <Route path="/add-course" element={<CourseForm addCourse={addCourse} />} />
          <Route path="/course/:id" element={<CourseDetails courses={courses} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
