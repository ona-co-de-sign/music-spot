export default function MusicForm({ searchValue, setSearchValue }) {
    return (
        <form onSubmit={(e) => e.preventDefault()} className="music__form form">
            <label htmlFor="search" className='flex-row-center'>
                <input type="text"
                    placeholder='suche nach Musik... '
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="form__input"
                    id="search"
                />
                <img src="./icons/icon-search.png" alt="search icon" width="30" />
            </label>
        </form>
    )
}