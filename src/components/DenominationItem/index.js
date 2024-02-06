import './index.css'

const DenomiantaionsItem = props => {
  const {denominationsItem, reduceAmount} = props

  const {value} = denominationsItem

  const onDenominationClicked = () => {
    reduceAmount(value)
  }
  return (
    <li className="denomination-item">
      <button
        className="denomination-button"
        type="button"
        onClick={onDenominationClicked}
      >
        {value}
      </button>
    </li>
  )
}

export default DenomiantaionsItem
