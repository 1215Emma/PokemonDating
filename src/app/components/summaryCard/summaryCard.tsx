import styles from './summaryCard.module.css'
import capitalizeFirstWord from '@/app/helpers/capitalizeFirstWord'

interface SummaryCardProps {
  height: number
  weight: number
  location: string
  id: number
  type: string
}

const SummaryCard = (props: SummaryCardProps) => {
  const generation = props.id >= 1 && props.id <= 156 ? 'Kanto' : 'unknown'

  let typeStyle = {}
  if (props.type == 'grass') {
    typeStyle = {
      display: 'inline-block',
      padding: ' 0 5px',
      margin: '0 5px',
      borderRadius: '2px',
      backgroundColor: '#3FA129',
      color: 'white',
    }
  } else {
    typeStyle = {
      display: 'inline-block',
      padding: ' 0 5px',
      margin: '0 5px',
      borderRadius: '2px',
      backgroundColor: 'black',
      color: 'white',
    }
  }

  return (
    <div className={`${styles.matchDescription} ${styles.cards}`}>
      <div className={styles.matchDescriptionOverview}>
        <div className={styles.keyBio}>
          <p>Height: {props.height}m</p>
          <p>Weight: {props.weight / 10}kg</p>
          <p>Location: {capitalizeFirstWord(props.location)}</p>
        </div>
        <div className={styles.keySubBio}>
          <p>Id: {props.id}</p>
          <p>Generation: {generation}</p>
          <div className={styles.typeContainer}>
            <p>Type: </p>
            <p style={typeStyle}>{capitalizeFirstWord(props.type)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryCard
