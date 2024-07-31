import React from "react";
import { Course } from "../types/Course";
import CourseCard from "../components/CourseCard";
import styled from "styled-components";

const CourseListContainer = styled.div`
  display: flex;
  justify-content: center; /* Центрирование списка */
  padding: 20px;
  border: 10px double blue; /* Рамка */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  width: 80%;
`;

const CourseList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%; /* Ширина списка */
`;

const CourseListItem = styled.li`
  margin-bottom: 16px;
  text-align: left; /* Выравнивание текста по левому краю */
`;

const AllCoursePage: React.FC<{ courses: Course[] }> = ({ courses }) => {
  return (
    <CourseListContainer>
      <CourseList>
        {courses.map((course) => (
          <CourseListItem key={course.id}>
            <CourseCard {...course} />
          </CourseListItem>
        ))}
      </CourseList>
    </CourseListContainer>
  );
};

export default AllCoursePage;
