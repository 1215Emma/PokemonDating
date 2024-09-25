import Image, { StaticImageData } from 'next/image'
import styles from './pokemonCard.module.css'
import LikeButton from '../likeButton/likeButton'
import { PokemonCardData } from '@/helpers/types'

const PokemonCard: React.FC<PokemonCardData> = ({
  imgPokemonSrc,
  imgBackgroundSrc,
  isLikeCardOpen,
  setIsLikeCardOpen,
  likedContent,
  setLikedContent,
}) => {
  return (
    <div className={`${styles.pokemon_image_container} ${styles.cards}`}>
      <Image
        src={imgPokemonSrc}
        height={200}
        width={200}
        placeholder="blur"
        blurDataURL={`data:${imgPokemonSrc}`}
        alt="pokemon"
        className={styles.pokemon_image}
      />
      <Image
        src={imgBackgroundSrc}
        placeholder="blur"
        blurDataURL={`data:${imgBackgroundSrc}`}
        alt="grass background"
        className={styles.pokemon_background}
      />
      <LikeButton
        imgPokemonSrc={imgPokemonSrc}
        imgBackgroundSrc={imgBackgroundSrc}
        isLikeCardOpen={isLikeCardOpen}
        setIsLikeCardOpen={setIsLikeCardOpen}
        likedContent={likedContent}
        setLikedContent={setLikedContent}
      />
    </div>
  )
}

export default PokemonCard
