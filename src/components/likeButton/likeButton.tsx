import Image, { StaticImageData } from 'next/image'
import styles from './likeButton.module.css'
import Love_ball from '@/../public/Love_ball.png'

type LikedContent = {
  picture: string
  imgBg: StaticImageData
  prompt: string
}

interface LikeButtonsProps {
  imgPokemonSrc: string
  imgBackgroundSrc: StaticImageData
  isLikeCardOpen: boolean
  setIsLikeCardOpen: (isLikeCardOpen: boolean) => void
  likedContent: LikedContent
  setLikedContent: (likedContent: LikedContent) => void
}

const LikeButton = (props: LikeButtonsProps) => {
  return (
    <button
      type="button"
      className={styles.like_button}
      onClick={() => {
        props.setIsLikeCardOpen(true)
        props.setLikedContent({
          picture: props.imgPokemonSrc,
          imgBg: props.imgBackgroundSrc,
          prompt: '',
        })
      }}
      disabled={props.isLikeCardOpen}
    >
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
