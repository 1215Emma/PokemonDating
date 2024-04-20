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

interface MatchContainerProps {
  name: string
  height: number
  weight: number
  location: string
  id: number
  type: string
  officialSprite: string
  dreamWorldSprite: string
  homeSprite: string
  imgBackgroundSrc: StaticImageData
}

interface LikedContent {
  picture: string
  imgBg: StaticImageData
  prompt: string
}
const MatchContainer = (props: MatchContainerProps) => {
  const [isLikeCardOpen, setIsLikeCardOpen] = useState(false)
  const [likedContent, setLikedContent] = useState<LikedContent>({
    picture: '',
    imgBg: { src: '', height: 0, width: 0 },
    prompt: '',
  })
  console.log('likedContent', likedContent)
  return (
    <div className={styles.container}>
      {isLikeCardOpen && (
        <React.Fragment>
          <div className={styles.darkBackdrop} />
          <LikeCardPopup
            likedContent={likedContent}
            setLikedContent={setLikedContent}
          />
        </React.Fragment>
      )}
      <div className={styles.matchContainer}>
        <h2 className={styles.pokemon_name}>
          {capitalizeFirstWord(props.name)}
        </h2>
        <PokemonCard
          imgPokemonSrc={props.officialSprite}
          imgBackgroundSrc={props.imgBackgroundSrc}
          isLikeCardOpen={isLikeCardOpen}
          setIsLikeCardOpen={setIsLikeCardOpen}
          likedContent={likedContent}
          setLikedContent={setLikedContent}
          //   prompt={''}
        />
        <PromptCard />
        <SummaryCard
          height={props.height}
          weight={props.weight}
          location={capitalizeFirstWord(props.location)}
          id={props.id}
          type={capitalizeFirstWord(props.type)}
        />
        <PokemonCard
          imgPokemonSrc={props.dreamWorldSprite}
          imgBackgroundSrc={props.imgBackgroundSrc}
          isLikeCardOpen={isLikeCardOpen}
          setIsLikeCardOpen={setIsLikeCardOpen}
          likedContent={likedContent}
          setLikedContent={setLikedContent}
        />
        <PokemonCard
          imgPokemonSrc={props.homeSprite}
          imgBackgroundSrc={props.imgBackgroundSrc}
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
