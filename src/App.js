import React from 'react'

import Form from './Form'
import Table from './Table'

class App extends React.Component {
    state = {
        characters: [],
    }

    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character]})
    }

    removeCharacter = index => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    render() {
        const { characters } = this.state

        return (
            <div className="container">
                <h1>今日は, React!</h1>
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App