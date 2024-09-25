import styles from './LikeCardPopup.module.css'
import Image, { StaticImageData } from 'next/image'
import { LikeCardModule } from '@/helpers/types'

const LikeCardPopup: React.FC<LikeCardModule> = ({
  likedContent,
  setLikedContent,
  isLikeCardOpen,
  setIsLikeCardOpen,
}) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.closePopup}
        onClick={() => setIsLikeCardOpen(false)}
      >
        x
      </button>
      <Image
        src={likedContent.picture}
        height={200}
        width={200}
        placeholder="blur"
        blurDataURL={`data:${likedContent.picture}`}
        alt="pokemon"
        className={styles.pokemon_image}
      />
      <Image
        src={likedContent.imgBg}
        placeholder="blur"
        blurDataURL={`data:${likedContent.imgBg}`}
        alt="grass background"
        className={styles.pokemon_background}
      />
    </div>
  )
}

export default LikeCardPopup
