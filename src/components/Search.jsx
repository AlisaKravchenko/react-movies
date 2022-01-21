import React from 'react'
import { Main } from '../layout/Main'

export class Search extends React.Component {
    state = {
        search: '',
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.search(this.state.search)
        }
    }

    render() {
        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        className='validate'
                        id='email_inline'
                        type='email'
                        placeholder='Search films'
                        onChange={(e) => {
                            this.setState({ search: e.target.value })
                        }}
                        onKeyDown={this.keyEnter}
                    ></input>
                    <button
                        className='btn search-btn'
                        onClick={() => this.props.search(this.state.search)}
                    >
                        Search
                    </button>
                </div>
            </div>
        )
    }
}
