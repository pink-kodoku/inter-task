import styles from "./index.module.scss"
import {Button, TextField} from "@mui/material";
import React, {useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {useActions} from "../../hooks/useActions";
import {useFormik} from "formik";
import {validateInputs} from "./validation"

export interface Values {
  username: string;
  avatar_url: string;
  content: string;
}

const CommentForm = () => {
  const {createComment} = useActions();
  const [errors, setErrors] = useState<any>({avatar_url: '', content: '', username: ''});


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    formik.handleSubmit()
    setErrors(formik.errors)
    console.log(formik.errors)

    if (!isErrors(formik.errors)) {
      createComment({
        id: uuidv4(),
        avatar_url: formik.values.avatar_url,
        username: formik.values.username,
        content: formik.values.content,
        comment_date: new Date().toString(),
        rating: 0
      })
      resetValues();
      formik.handleSubmit()
    }
  }


  const formik = useFormik({
    initialValues: {
      username: '',
      avatar_url: '',
      content: '',
    },
    validateOnMount: true,
    validate: validateInputs,
    onSubmit: values => {
    },
  });

  function isErrors(obj: Object) {
    let isError = false;
    for (let str of Object.values(obj)) {
      if (str !== '') {
        isError = true;
      }
    }

    return isError
  }

  function resetValues() {
    for (let key in formik.values) {
      // @ts-ignore
      formik.values[key] = ''
    }
  }

  const labels: { [input: string]: any } = {
    username: "Имя пользователя",
    avatar_url: "Аватар URL",
    content: "Текст"
  }

  return (
    <div>
      <div className={styles.form}>
        <form onSubmit={onSubmit}>
          {Object.keys(formik.values).map((input, index) => (
            <TextField
              key={index}
              error={!!errors[input]}
              helperText={errors[input]}
              name={input}
              autoComplete='off'
              type="text"
              className={styles.formInput}
              label={labels[input]}
              variant="outlined"
              // @ts-ignore
              value={formik.values[input]}
              onChange={formik.handleChange}
            />
          ))}

          <Button type="submit" variant="contained">Добавить</Button>
        </form>
      </div>
    </div>
  )
}

export default CommentForm