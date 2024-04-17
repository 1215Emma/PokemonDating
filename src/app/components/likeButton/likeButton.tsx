import Image from 'next/image'
import styles from './likeButton.module.css'
import Love_ball from '../../../../public/Love_ball.png'

const LikeButton = () => {
  return (
    <button type="button" className={styles.like_button}>
      <Image
        src={Love_ball}
        height={60}
        width={60}
        placeholder="blur"
        blurDataURL={`data:${Love_ball}`}
        alt="Love_ball"
      />
    </button>
  )
}

export default LikeButton
