import styles from './summaryCard.module.css'
import capitalizeFirstWord from '@/helpers/capitalizeFirstWord'
import { SummaryCardData } from '@/helpers/types'

const SummaryCard: React.FC<SummaryCardData> = ({
  height,
  weight,
  location,
  id,
  type,
}) => {
  const generation = id >= 1 && id <= 156 ? 'Kanto' : 'unknown'

  let typeStyle = {}
  if (type == 'Grass') {
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
          <p>Height: {height}m</p>
          <p>Weight: {weight / 10}kg</p>
          <p>Location: {location}</p>
        </div>
        <div className={styles.keySubBio}>
          <p>Id: {id}</p>
          <p>Generation: {generation}</p>
          <div className={styles.typeContainer}>
            <p>Type: </p>
            <p style={typeStyle}>{type}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryCard
