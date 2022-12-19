import { useState } from 'react';
import { useMusic } from '@/hooks/useMusic';
import MusicForm from './MusicForm';
import MusicFilter from './MusicFilter';

export default function Music() {
    const [searchValue, setSearchValue] = useState('');
    const [music, setMusic] = useState('');
    useMusic(searchValue, setMusic);

    return (
        <div className='music'>
            <MusicForm searchValue={searchValue} setSearchValue={setSearchValue} />
            <MusicFilter music={music} setMusic={setMusic} />
        </div>
    )
}
