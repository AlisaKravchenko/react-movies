import React, { useEffect, useState } from 'react'
import { List } from '../components/List'
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader'
import { Search } from '../components/Search'

const API_KEY = process.env.REACT_APP_API_KEY

export const Main = () => {
    const [movies, setMovies] = useState([])
    const [type, setType] = useState('all')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&&s=matrix&`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data['Search'])
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }, [])

    const searchHandle = (str) => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&&s=${str}&`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data['Search'])
                setLoading(false)
            })
            .catch((err) => {
                console.error(err)
                setLoading(false)
            })
    }

    const listHandle = (type) => {
        setType(type)
    }

    return (
        <>
            <main className='container content'>
                <Search search={searchHandle} />
                <List list={listHandle} />
                {loading ? (
                    <Preloader />
                ) : (
                    <Movies type={type} movies={movies} />
                )}
            </main>
        </>
    )
}
