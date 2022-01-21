export function List(props) {
    const handleList = (event) => {
        props.list(event.target.dataset.type)
    }
    return (
        <>
            <p className='radio'>
                <label>
                    <input
                        name='group1'
                        type='radio'
                        data-type='all'
                        onClick={(event) => handleList(event)}
                    />
                    <span>All</span>
                </label>
            </p>
            <p className='radio'>
                <label>
                    <input
                        name='group1'
                        type='radio'
                        data-type='movie'
                        onClick={(event) => handleList(event)}
                    />
                    <span>Only movies</span>
                </label>
            </p>
            <p className='radio'>
                <label>
                    <input
                        name='group1'
                        type='radio'
                        data-type='series'
                        onClick={(event) => handleList(event)}
                    />
                    <span>Only series</span>
                </label>
            </p>
        </>
    )
}
