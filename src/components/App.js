import React from 'react'
import Button from './Button'
import Dropdown from './Dropdown'
import Price from './Price'
import axios from '../api/axios'

class App extends React.Component {
    state = {
        currencies: [],
        from: '',
        to: '',
        price: 0,
        exchangePrice: 0,
        error: ''
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () =>{
        const response = await axios.get('/listquotes')

        this.setState({ currencies: response.data })
    }

    onFromSelect = currency => {
        this.setState({ from: currency })
    }

    onToSelect = currency => {
        this.setState({ to: currency })
    }

    onInputChange = value => {
        this.setState({ price: value })
    }

    onButtonSubmit = async () => {
        if (! this.state.price) {
            this.setState({ error: 'No price' })

            return
        }
        this.setState({ error: '' })

        const params = {
            from: this.state.from,
            to: this.state.to,
            q: this.state.price
        };

        const response = await axios.get('/exchange', { params })

        this.setState({exchangePrice: response.data})
    }


    render() {

        return (
            <div>
                <Dropdown currencies={this.state.currencies} dropdownChange={this.onFromSelect}/>
                <Dropdown currencies={this.state.currencies} dropdownChange={this.onToSelect}/>
                <Price inputChange={this.onInputChange} />
                <Button button='Exchange' onButtonSub={this.onButtonSubmit} />
                <div>{this.state.error}</div>
                <div>{this.state.exchangePrice}</div>
            </div>
        )
    }
}

export default App