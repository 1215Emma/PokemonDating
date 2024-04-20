import Image from 'next/image'
import styles from './dislikeButton.module.css'
import X from '@/../public/X.png'

const DislikeButton = () => {
  return (
    <div className={styles.dislike_button_container}>
      <button type="button" className={styles.dislike_button}>
        <Image
          src={X}
          height={35}
          width={35}
          placeholder="blur"
          blurDataURL={`data:${X}`}
          alt="dislike_button"
        />
      </button>
    </div>
  )
}

export default DislikeButton
