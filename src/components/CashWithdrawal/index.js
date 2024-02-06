import {Component} from 'react'

import DenominationsItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  reduceAmount = value => {
    const {balance} = this.state
    if (balance > 0) {
      this.setState(prevState => ({balance: prevState.balance - value}))
    }
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="main-container">
        <div className="app-container">
          <div className="upper-section">
            <div className="user-details">
              <p className="profile-pic">S</p>
              <p className="user-name">Sarah Williams</p>
            </div>
            <div className="amount-details">
              <p className="balance-title">Your Balance</p>
              <div className="balance-details">
                <p className="balance-amount">{balance}</p>
                <p className="balance-currency">In Rupees</p>
              </div>
            </div>
          </div>
          <div className="lower-section">
            <p className="lower-title">Withdraw</p>
            <p className="lower-description">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominations-list">
              {denominationsList.map(eachAmount => (
                <DenominationsItem
                  denominationsItem={eachAmount}
                  key={eachAmount.id}
                  reduceAmount={this.reduceAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
