import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css';

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  tasks: { id: number; description: string }[];
}

interface CourseDetailsProps {
  courses: Course[];
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ courses }) => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((course) => course.id === Number(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-details">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p>Price: ${course.price}</p>
      <ul>
        {course.tasks.map((task) => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
