import React from 'react'
import { List } from '../components/List'
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            type: 'all',
            loading: false,
        }
    }
    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&&s=matrix&`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ movies: data['Search'] })
            })
    }

    searchHandle = (str) => {
        this.setState({ loading: true })
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&&s=${str}&`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({ movies: data['Search'], loading: false })
            })
    }

    listHandle = (type) => {
        this.setState({ type: type })
    }

    render() {
        return (
            <>
                <main className='container content'>
                    <Search search={this.searchHandle} />
                    <List list={this.listHandle} />
                    {this.state.loading ? (
                        <Preloader />
                    ) : (
                        <Movies
                            type={this.state.type}
                            movies={this.state.movies}
                        />
                    )}
                </main>
            </>
        )
    }
}
export { Main }
