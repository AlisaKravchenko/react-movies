export function Movie(props) {
    const { Title, Poster, Year, Type } = props
    return (
        <>
            <div className='card'>
                <div className='card-image waves-effect waves-block waves-light'>
                    <img className='activator' src={Poster}></img>
                </div>
                <div className='card-content'>
                    <span className='card-title activator grey-text text-darken-4'>
                        {Title}
                    </span>
                    <p>{Year}</p>
                    <p className='card-type'>{Type}</p>
                </div>
            </div>
        </>
    )
}
