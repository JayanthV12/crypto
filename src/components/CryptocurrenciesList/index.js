// Write your JS code here
import {Loader} from 'react-loader-spinner'

import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptoList: [],
    isLoaded: false,
  }

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedData = data.map(each => ({
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      id: each.id,
      usdValue: each.usd_value,
    }))
    this.setState({
      cryptoList: updatedData,
      isLoaded: false,
    })
  }

  render() {
    const {cryptoList, isLoaded} = this.state
    return (
      <div className="crypto-container">
        <div className="crypto-img">
          <h1 className="heading">CryptoCurrency Tracker</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
          />
        </div>
        <div className="currency">
          <div>
            <div className="currency-header">
              <h1 className="para">CoinType</h1>
              <div className="currency-type">
                <h1 className="para1">USD</h1>
                <h1 className="para">EURO</h1>
              </div>
            </div>
          </div>
        </div>
        <ul>
          {isLoaded ? (
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          ) : (
            cryptoList.map(each => (
              <CryptocurrencyItem cryptoData={each} key={each.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}
export default CryptocurrenciesList
