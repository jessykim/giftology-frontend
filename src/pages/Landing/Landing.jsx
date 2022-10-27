import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.page}>
      <section className={styles.first}>
        {/* <img src='/landing2.jpg' alt='landing page'/> */}
        {/* <div className={styles.container}> */}
          <div className={styles.welcome}>
            <div className={styles.statement}>
              <p>
                Welcome to Giftology,<br />
                {user ? user.name : 'friend'}!
              </p>
            </div>
            <div className={styles.favlogo}>
              <img src="/favlogo.jpg" alt="favicon logo"/>
            </div>
            <div className={styles.introduction}>
              <p>We're here to help you gift in confidence!</p>
            </div>
          </div>
        {/* </div> */}
      </section>
      <section className={styles.second}>
        <h2>About Us</h2>
        <div>
          <p>Some feel confident when it comes to finding the perfect gift for others, while others do not. We're here to help you gift with ease and feel confident when deciding on what gifts to buy. Giftology can help facilitate the communication between gift givers and receivers. You will be able to create your own wishlists as well as view your friends' wishlists to know exactly what they need or want for the next special occasion.</p>
          <p>Giftology, where gifting is <span>MadeEz</span>!</p>
        </div>
      </section>
    </main>
  )
}

export default Landing
