import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.welcomeStatement}>
          <div>
            Welcome to Giftology,<br />
            {user ? user.name : 'friend'}!
          </div>
        </div>
        <div className={styles.introduction}>
          <p>Giftology helps you gift in confidence!</p>
        </div>
      </div>
    </main>
  )
}

export default Landing
