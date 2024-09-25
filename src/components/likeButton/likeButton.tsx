import Image, { StaticImageData } from 'next/image'
import styles from './likeButton.module.css'
import Love_ball from '@/../public/Love_ball.png'
import { PokemonCardData } from '@/helpers/types'

const LikeButton: React.FC<PokemonCardData> = ({
  imgPokemonSrc,
  imgBackgroundSrc,
  isLikeCardOpen,
  setIsLikeCardOpen,
  likedContent,
  setLikedContent,
}) => {
  return (
    <button
      type="button"
      className={styles.like_button}
      onClick={() => {
        setIsLikeCardOpen(true)
        setLikedContent({
          picture: imgPokemonSrc,
          imgBg: imgBackgroundSrc,
          prompt: '',
        })
      }}
      disabled={isLikeCardOpen}
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
