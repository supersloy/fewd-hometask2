import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './AuthForm.module.scss'

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    fetch('http://localhost:3003/register', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        console.log(myJson)
      })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input {...register('login', { required: true })} />
      <input type="password" {...register('password', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  )
}
