import { useEffect } from 'react';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import defaultSongs from '../pages/api/defaultSongs';

export function useMusic(searchValue, setMusic) {
    const debouncedSearchValue = useDebouncedValue(searchValue, 600);

    useEffect(() => {
        if (debouncedSearchValue.length < 2) {
            setMusic(defaultSongs)
            return;
        }

        async function fetchMusic() {
            try {
                const response = await fetch(`https://itunes.apple.com/search?term=${debouncedSearchValue}&limit=20&media=music`)

                if (!response) {
                    throw new Error('Problem beim Laden der Daten!');
                }
                const jsonData = await response.json();

                if (jsonData.resultCount > 0) {
                    setMusic(jsonData.results)
                } else {
                    setMusic([])
                }
            } catch (e) {
                console.log(e);
            }
        }
        fetchMusic();
    }, [debouncedSearchValue, searchValue, setMusic])
}
