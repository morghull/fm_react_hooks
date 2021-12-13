import React from 'react';
import { Formik, Form, Field } from 'formik';
import useTodo from '../../hooks/useTodo';

const ToDo = () => {
  const { tasks, setTasts } = useTodo([
    {
      id: Date.now(),
      body: 'write Todo',
      isDone: false,
    },
  ]);
  //использовать валидацию Yup
  return (
    <div>
      <Formik>
        {/* //форма єто отдельній компонент */}
        <Form>
          <Field initialValues={{ bodu: '' }} onSubmit="addTask" name="body">
            <input type="submit" value="add" />
          </Field>
        </Form>
      </Formik>
      <ul>
        {/* //отдельный компонент */}
        {tasks.map((task) => (
          <li key={task.id}>{task.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
