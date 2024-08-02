import React from "react";
import { useParams } from "react-router-dom";
import { Course } from "./types/Course";

interface CourseDetailsProps {
  courses: Course[];
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ courses }) => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find((course) => course.id === Number(id));

  if (!course) {
    return <div style={styles.notFound}>Course not found</div>;
  }

  return (
    <div style={styles.courseDetails}>
      <h2 style={styles.title}>{course.title}</h2>
      <p style={styles.description}>{course.description}</p>
      <p style={styles.price}>Price: ${course.price}</p>
      <ul style={styles.tasks}>
        {course.tasks.map((task) => (
          <li key={task.id} style={styles.task}>
            {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline styles
const styles = {
  courseDetails: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '2em',
    color: '#333',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1.2em',
    color: '#666',
    marginBottom: '20px',
  },
  price: {
    fontSize: '1.2em',
    color: '#27ae60',
    marginBottom: '20px',
  },
  tasks: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
  task: {
    fontSize: '1em',
    color: '#555',
    marginBottom: '10px',
  },
  notFound: {
    fontSize: '1.5em',
    color: '#e74c3c',
    textAlign: 'center',
    margin: '20px',
  },
};

export default CourseDetails;
