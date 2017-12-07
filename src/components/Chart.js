import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "react-router-redux"
import { bindActionCreators } from "redux"

class Chart extends Component {
  componentDidMount() {
    const tradingWidget = document.createElement("script")
    tradingWidget.innerHTML = `new TradingView.widget({
      width: 765,
      height: 370,
      id: 'testing',
      symbol: 'BITTREX:ETHBTC',
      interval: 'D',
      timezone: 'Asia/Singapore',
      theme: 'Dark',
      style: '1',
      locale: 'en',
      toolbar_bg: '#f1f3f6',
      enable_publishing: false,
      allow_symbol_change: true,
      hideideas: true
    })`
    document.body.appendChild(tradingWidget)
  }

  render() {
    return <div id="testing123" />
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    changePage: () => push("/Chart")
  })
export default connect(mapDispatchToProps)(Chart)
