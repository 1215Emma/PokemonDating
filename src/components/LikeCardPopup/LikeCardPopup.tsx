import styles from './LikeCardPopup.module.css'
import Image, { StaticImageData } from 'next/image'

type LikedContent = {
  picture: string
  imgBg: StaticImageData
  prompt: string
}

interface LikeCardPopupProps {
  likedContent: LikedContent
  setLikedContent: (likedContent: LikedContent) => void
  isLikeCardOpen: boolean
  setIsLikeCardOpen: (isLikeCardOpen: boolean) => void
}

const LikeCardPopup = (props: LikeCardPopupProps) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.closePopup}
        onClick={() => props.setIsLikeCardOpen(false)}
      >
        x
      </button>
      <Image
        src={props.likedContent.picture}
        height={200}
        width={200}
        placeholder="blur"
        blurDataURL={`data:${props.likedContent.picture}`}
        alt="pokemon"
        className={styles.pokemon_image}
      />
      <Image
        src={props.likedContent.imgBg}
        placeholder="blur"
        blurDataURL={`data:${props.likedContent.imgBg}`}
        alt="grass background"
        className={styles.pokemon_background}
      />
    </div>
  )
}

export default LikeCardPopup
