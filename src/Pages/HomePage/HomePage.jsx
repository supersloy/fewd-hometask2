import React, { useEffect, useState } from 'react'
import { PersonCard } from '../../Components/PersonCard/PersonCard'
import styles from './HomePage.module.scss'

export const HomePage = ({ token }) => {
  const [content, setContent] = useState([])

  async function requestUserData(token) {
    console.log('Home')
    const response = await fetch('http://localhost:3003/info', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
    const result = await response.json()
    console.log(result)
    setContent(result)
  }

  useEffect(() => requestUserData(token).then(), [token])

  return (
    <div className={styles.cardsWrapper}>
      {content.map((el) => (
        <PersonCard key={el.id} {...el} />
      ))}
    </div>
  )
}
