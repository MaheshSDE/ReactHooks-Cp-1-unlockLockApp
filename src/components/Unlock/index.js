// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CardContainer,
  Img,
  Para,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setLock] = useState(false)

  const onChangeButton = () => {
    setLock(prevState => !prevState)
  }

  const image = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const altValue = isUnlocked ? 'unlock' : 'lock'

  const heading = isUnlocked
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'
  const buttonText = isUnlocked ? 'Lock' : 'Unlock'

  return (
    <MainContainer>
      <CardContainer>
        <Img src={image} alt={altValue} />
        <Para unlocked={isUnlocked}>{heading}</Para>
        <Button onClick={onChangeButton}>{buttonText}</Button>
      </CardContainer>
    </MainContainer>
  )
}
export default Unlock
