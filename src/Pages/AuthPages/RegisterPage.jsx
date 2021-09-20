import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './AuthForm.module.scss'
import { useHistory } from 'react-router'

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const history = useHistory()
  const [backendErrorMessage, setBackendErrorMessage] = useState('')

  async function onSubmit(data) {
    const response = await fetch('http://localhost:3003/register', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
    const string = await response.text()
    const message = string === '' ? 'success' : JSON.parse(string).message
    if (message === 'success') {
      console.log('Successfull registration')
      history.push('/login')
    } else {
      console.log(`Error on register:${message}`)
      setBackendErrorMessage(message)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input {...register('login', { required: true })} />
      <input type="password" {...register('password', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      {backendErrorMessage && <span>{backendErrorMessage}</span>}
      <input type="submit" value="Register" />
    </form>
  )
}
