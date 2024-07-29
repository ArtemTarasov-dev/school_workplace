import React from 'react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

interface Course {
  id: number;
  title: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <Link to={`/course/${course.id}`}>View Details</Link>
    </div>
  );
};

export default CourseCard;