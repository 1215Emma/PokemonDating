'use client'

import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './MatchContainer.module.css'
import capitalizeFirstWord from '@/helpers/capitalizeFirstWord'
import PokemonCard from '../pokemonCard/pokemonCard'
import PromptCard from '../promptCard/promptCard'
import SummaryCard from '../summaryCard/summaryCard'
import DislikeButton from '../dislikeButton/dislikeButton'
import LikeCardPopup from '../LikeCardPopup/LikeCardPopup'
import { MatchContainerData, LikedContent } from '@/helpers/types'

const MatchContainer: React.FC<MatchContainerData> = ({
  name,
  height,
  weight,
  location,
  id,
  type,
  officialSprite,
  dreamWorldSprite,
  homeSprite,
  imgBackgroundSrc,
}) => {
  const [isLikeCardOpen, setIsLikeCardOpen] = useState(false)
  const [likedContent, setLikedContent] = useState<LikedContent>({
    picture: '',
    imgBg: { src: '', height: 0, width: 0 },
    prompt: '',
  })
  return (
    <div className={styles.container}>
      {isLikeCardOpen && (
        <React.Fragment>
          <div className={styles.darkBackdrop} />
          <LikeCardPopup
            likedContent={likedContent}
            setLikedContent={setLikedContent}
            isLikeCardOpen={isLikeCardOpen}
            setIsLikeCardOpen={setIsLikeCardOpen}
          />
        </React.Fragment>
      )}
      <div className={styles.matchContainer}>
        <h2 className={styles.pokemon_name}>{capitalizeFirstWord(name)}</h2>
        <PokemonCard
          imgPokemonSrc={officialSprite}
          imgBackgroundSrc={imgBackgroundSrc}
          isLikeCardOpen={isLikeCardOpen}
          setIsLikeCardOpen={setIsLikeCardOpen}
          likedContent={likedContent}
          setLikedContent={setLikedContent}
        />
        <PromptCard />
        <SummaryCard
          height={height}
          weight={weight}
          location={capitalizeFirstWord(location)}
          id={id}
          type={capitalizeFirstWord(type)}
        />
        <PokemonCard
          imgPokemonSrc={dreamWorldSprite}
          imgBackgroundSrc={imgBackgroundSrc}
          isLikeCardOpen={isLikeCardOpen}
          setIsLikeCardOpen={setIsLikeCardOpen}
          likedContent={likedContent}
          setLikedContent={setLikedContent}
        />
        <PokemonCard
          imgPokemonSrc={homeSprite}
          imgBackgroundSrc={imgBackgroundSrc}
          isLikeCardOpen={isLikeCardOpen}
          setIsLikeCardOpen={setIsLikeCardOpen}
          likedContent={likedContent}
          setLikedContent={setLikedContent}
        />
        {!isLikeCardOpen && <DislikeButton />}
      </div>
    </div>
  )
}

export default MatchContainer
