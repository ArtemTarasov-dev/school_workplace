import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './CourseForm.css';

interface Task {
  id: number;
  description: string;
}

interface CourseFormProps {
  addCourse: (course: Course) => void;
}

interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  tasks: Task[];
}

const CourseForm: React.FC<CourseFormProps> = ({ addCourse }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskDescription, setTaskDescription] = useState<string>('');

  const addTask = () => {
    setTasks([...tasks, { id: Date.now(), description: taskDescription }]);
    setTaskDescription('');
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      price: Yup.number().required('Required').positive('Price must be a positive number'),
    }),
    onSubmit: (values, { resetForm }) => {
      const course: Course = {
        id: Date.now(),
        title: values.title,
        description: values.description,
        price: parseFloat(values.price),
        tasks: tasks,
      };
      addCourse(course);
      setTasks([]);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="course-form">
      <div>
        <label htmlFor="title">Course Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title ? <div>{formik.errors.title}</div> : null}
      </div>
      <div>
        <label htmlFor="description">Course Description</label>
        <textarea
          id="description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.errors.description ? <div>{formik.errors.description}</div> : null}
      </div>
      <div>
        <label htmlFor="price">Course Price ($)</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        {formik.errors.price ? <div>{formik.errors.price}</div> : null}
      </div>
      <div className="tasks-section">
        <label htmlFor="task">Add Task</label>
        <input
          id="task"
          name="task"
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button type="button" onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.description}</li>
        ))}
      </ul>
      <button type="submit">Add Course</button>
    </form>
  );
};

export default CourseForm;
