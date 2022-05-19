import { Component } from 'react'

class DisabledButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            btnDisabled: false
        }
    }

    disableBtn = (e) => {
        this.setState({ btnDisabled: true })

        setTimeout(() => {
            this.setState({ btnDisabled: false })
        }, 5000)
    }

    render() {
        return (
            <button onClick={this.disableBtn} disabled={this.state.btnDisabled}>Click Me</button>
        )
    }
}

export default DisabledButton