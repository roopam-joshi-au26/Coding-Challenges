import React from 'react'

class ClassComponent extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.userName}, from Class Based Component.</h1>
        );
    }

}

export default ClassComponent