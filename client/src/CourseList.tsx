import React from 'react';
import { Link } from 'react-router-dom';
import './CourseList.css';

interface CourseListProps {
  courses: Course[];
}

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  tasks: { id: number; description: string }[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="course-list">
      <h2>Course List</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Price: ${course.price}</p>
            <Link to={`/course/${course.id}`} className="details-button">View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
