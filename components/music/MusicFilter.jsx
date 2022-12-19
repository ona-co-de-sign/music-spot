import { useState } from 'react';
import MusicFilteredList from './MusicFilteredList';
import MusicFilterForm from './MusicFilterForm';
import MusicList from './MusicList';

export default function MusicFilter({ music }) {
    const [selectedGenre, setSelectedGenre] = useState('all genres');
    const filtedMusic = music && music.filter(el => el.primaryGenreName == selectedGenre);

    return (
        <>
            <MusicFilterForm music={music} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
            <div>
                {selectedGenre === "all genres" ?
                    <MusicList music={music} />
                    : <MusicFilteredList filtedMusic={filtedMusic} />
                }
            </div>
        </>
    )
}
