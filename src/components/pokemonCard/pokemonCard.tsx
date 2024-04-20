import Image, { StaticImageData } from 'next/image'
import styles from './pokemonCard.module.css'
import LikeButton from '../likeButton/likeButton'

type LikedContent = {
  picture: string
  imgBg: StaticImageData
  prompt: string
}

interface PokemonCardProps {
  imgPokemonSrc: string
  imgBackgroundSrc: StaticImageData
  isLikeCardOpen: boolean
  setIsLikeCardOpen: (isLikeCardOpen: boolean) => void
  likedContent: LikedContent
  setLikedContent: (likedContent: LikedContent) => void
}

const PokemonCard = (props: PokemonCardProps) => {
  return (
    <div className={`${styles.pokemon_image_container} ${styles.cards}`}>
      <Image
        src={props.imgPokemonSrc}
        height={200}
        width={200}
        placeholder="blur"
        blurDataURL={`data:${props.imgPokemonSrc}`}
        alt="pokemon"
        className={styles.pokemon_image}
      />
      <Image
        src={props.imgBackgroundSrc}
        placeholder="blur"
        blurDataURL={`data:${props.imgBackgroundSrc}`}
        alt="grass background"
        className={styles.pokemon_background}
      />
      <LikeButton
        imgPokemonSrc={props.imgPokemonSrc}
        imgBackgroundSrc={props.imgBackgroundSrc}
        isLikeCardOpen={props.isLikeCardOpen}
        setIsLikeCardOpen={props.setIsLikeCardOpen}
        likedContent={props.likedContent}
        setLikedContent={props.setLikedContent}
      />
    </div>
  )
}

export default PokemonCard
