/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import styles from './AuthForm.module.scss'

export const LoginPage = ({ setToken }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [backendErrorMessage, setBackendErrorMessage] = useState('')
  const history = useHistory()

  async function onSubmit(data) {
    const response = await fetch('http://localhost:3003/login', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
    const string = await response.text()
    const json = string === '' ? {} : JSON.parse(string)
    if (json.token) {
      console.log(`Token recieved: ${json.token}`)
      setToken(json.token)
      history.push('/home')
    } else {
      console.log(`Error on login:${json.message}`)
      setBackendErrorMessage(json.message)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input {...register('login', { required: true })} />
      <input type="password" {...register('password', { required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      {backendErrorMessage && <span>{backendErrorMessage}</span>}
      <input type="submit" value="Login" />
    </form>
  )
}
