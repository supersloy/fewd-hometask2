import React from 'react'
import styles from './Card.module.scss'

export const PersonCard = ({ id, name, email, avatar, address }) => {
  return (
    <div className={styles.card}>
      <img src={avatar} className={styles.card__image}></img>
      <div className={styles.card__content}>
        <span>ID: {id}</span>
        <span>NAME: {name}</span>
        <span>EMAIL: {email}</span>
        <span>ADDRESS: {address}</span>
      </div>
    </div>
  )
}
