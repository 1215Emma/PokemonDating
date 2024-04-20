import styles from './promptCard.module.css'
import LikeButton from '../likeButton/likeButton'

const PromptCard = () => {
  return (
    <div className={`${styles.prompt} ${styles.cards}`}>
      <p className={styles.promptHeader}>A fun fact about me is that...</p>
      <p className={styles.promptResponse}>I have vines!</p>
      <LikeButton />
    </div>
  )
}

export default PromptCard
