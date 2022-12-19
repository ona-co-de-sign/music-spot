export default function MusicFilterForm({ music, setSelectedGenre }) {
    let uniqueGenre = [...new Set(music && music.map(genre => genre.primaryGenreName))];
    return (
        <form className="music__filter-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="genre-filter">Filter nach Genre</label>
            <select id="genre-filter" onChange={(e) => setSelectedGenre(e.currentTarget.value)}>
                <option value="all genres">Alle Genres</option>
                {uniqueGenre.map(genre => (
                    <option value={genre} key={genre}>
                        {genre}
                    </option>
                ))}
            </select>
        </form>
    )
}
