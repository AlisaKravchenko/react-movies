import { Movie } from './Movie'

export function Movies(props) {
    const { movies = [], type } = props
    return (
        <div className='cards'>
            {movies.length ? (
                movies.map((movie) => {
                    if (movie.Type === type || type === 'all') {
                        return <Movie key={movie.imdbID} {...movie} />
                    }
                })
            ) : (
                <h3>Nothing found</h3>
            )}
        </div>
    )
}
