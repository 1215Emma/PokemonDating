import Image from 'next/image'
import styles from './page.module.css'
import Pikachu from '../../public/Pikachu.png'
import Love_ball from '../../public/Love_ball.png'
import X from '../../public/X.png'
import Grass from '../../public/grass.jpg'
import PokeFindrBackground from '../../public/PokeFindrBackground2.png'
import LikeButton from './components/likeButton/likeButton'
import DislikeButton from './components/dislikeButton/dislikeButton'
import PokemonCard from './components/pokemonCard/pokemonCard'
import PromptCard from './components/promptCard/promptCard'
import SummaryCard from './components/summaryCard/summaryCard'
import capitalizeFirstWord from './helpers/capitalizeFirstWord'

async function getServerSideProps() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
  const repo = await res.json()
  const res2 = await fetch('https://pokeapi.co/api/v2/pokemon/1/encounters')
  const repo2 = await res2.json()
  return { ...repo, ...repo2 }
}

export default async function Home() {
  try {
    const pokemon = await getServerSideProps()
    const officialSprite =
      pokemon.sprites.other['official-artwork'].front_default
    const dreamWorldSprite = pokemon.sprites.other.dream_world.front_default
    const homeSprite = pokemon.sprites.other.home.front_default

    return (
      <main className={styles.main}>
        <div className={styles.logo}>
          <Image src={Pikachu} width={150} height={150} alt="Pikachu Logo" />
          <h1>PokeFindr</h1>
        </div>
        <div className={styles.matchContainer}>
          {/* <div className={styles.pokemon_name_sticky}>
            <h2 className={styles.pokemon_name}>{capitalizeFirstWord(pokemon.name)}</h2>
          </div> */}
          <h2 className={styles.pokemon_name}>
            {capitalizeFirstWord(pokemon.name)}
          </h2>
          <PokemonCard
            imgPokemonSrc={officialSprite}
            imgBackgroundSrc={Grass}
          />
          <PromptCard />
          <SummaryCard
            height={pokemon.height}
            weight={pokemon.weight}
            location={pokemon['0'].location_area.name}
            id={pokemon.id}
            type={pokemon.types[0].type.name}
          />
          <PokemonCard
            imgPokemonSrc={dreamWorldSprite}
            imgBackgroundSrc={Grass}
          />
          <PokemonCard imgPokemonSrc={homeSprite} imgBackgroundSrc={Grass} />
          <DislikeButton />
        </div>
      </main>
    )
  } catch (error) {
    return <div>Error fetching: {JSON.stringify(error)}</div>
  }
}
