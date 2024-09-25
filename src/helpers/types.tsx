import Image, { StaticImageData } from 'next/image'

export type MatchContainerData = {
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

export type SummaryCardData = {
  height: number
  weight: number
  location: string
  id: number
  type: string
}

export type LikedContent = {
  picture: string
  imgBg: StaticImageData
  prompt: string
}

export type PokemonCardData = {
  imgPokemonSrc: string
  imgBackgroundSrc: StaticImageData
  isLikeCardOpen: boolean
  setIsLikeCardOpen: (isLikeCardOpen: boolean) => void
  likedContent: LikedContent
  setLikedContent: (likedContent: LikedContent) => void
}

export type LikeCardModule = {
  isLikeCardOpen: boolean
  setIsLikeCardOpen: (isLikeCardOpen: boolean) => void
  likedContent: LikedContent
  setLikedContent: (likedContent: LikedContent) => void
}
