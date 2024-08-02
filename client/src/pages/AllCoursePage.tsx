import React from "react";
import { Course } from "../types/Course";
import CourseCard from "../components/CourseCard";
import { styled } from "styled-components";



const AllCoursePage: React.FC<{ courses: Course[] }> = ({ courses }) => {
  return (
    <div className="course-list">
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <CourseCard {...course} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllCoursePage;
