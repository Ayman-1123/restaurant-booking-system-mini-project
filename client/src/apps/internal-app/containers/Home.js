import React from 'react'
import styles from './css/Home.module.css'

const Home = () => {

  return (
    <div className={styles.Home}>
<<<<<<< HEAD
       <div>Home</div>
=======
      <div className={styles.Container}>
        <h1 className={styles.Header}>Explore the Flavour</h1>
        <p className={styles.textContent}>Experience global cuisine at our multinational restaurant, where flavors from around the world come together harmoniously.</p>
        <button className={styles.button} onClick={() => window.location.href = "/menu"}>Go to Menu</button>
      </div>
>>>>>>> de17b45 (Added Menu Page , Home Page)
    </div>
  )
}

export default Home