// Write your JS code here
import './index.css'

const CryptoCurrencyItem = props => {
  const {cryptoData} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoData
  return (
    <li className="currency1">
      <div>
        <div className="currency-header1">
          <div className="image-container">
            <img src={`${currencyLogo}`} alt={currencyName} className="image" />
            <p className="para">{currencyName}</p>
          </div>
          <div className="currency-type">
            <p className="para1">{usdValue}</p>
            <p className="para">{euroValue}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CryptoCurrencyItem
