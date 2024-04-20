import Image from 'next/image'
import styles from './page.module.css'
import Pikachu from '../../public/Pikachu.png'
import Grass from '../../public/grass.jpg'
import MatchContainer from '@/components/MatchContainer/MatchContainer'

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
        <MatchContainer
          name={pokemon.name}
          height={pokemon.height}
          weight={pokemon.weight}
          location={pokemon['0'].location_area.name}
          id={pokemon.id}
          type={pokemon.types[0].type.name}
          officialSprite={officialSprite}
          dreamWorldSprite={dreamWorldSprite}
          homeSprite={homeSprite}
          imgBackgroundSrc={Grass}
        />
        {/* <div className={styles.matchContainer}>
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
        </div> */}
      </main>
    )
  } catch (error) {
    return <div>Error fetching: {JSON.stringify(error)}</div>
  }
}
