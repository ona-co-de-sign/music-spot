import { useEffect } from 'react';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import defaultVideos from '../pages/api/defaultVideos';

export function useVideo(searchValue, setVideos) {
    const debouncedSearchValue = useDebouncedValue(searchValue, 600);

    useEffect(() => {
        if (debouncedSearchValue.length < 2) {
            setVideos(defaultVideos)
            return;
        }

        async function fetchMusic() {
            try {
                const response = await fetch(`https://itunes.apple.com/search?term=${debouncedSearchValue}&limit=10&media=musicVideo`)

                if (!response) {
                    throw new Error('Problem beim Laden der Daten!');
                }
                const jsonData = await response.json();

                if (jsonData.resultCount > 0) {
                    setVideos(jsonData.results)
                } else {
                    setVideos([])
                }
            } catch (e) {
                console.log(e);
            }
        }
        fetchMusic();
    }, [debouncedSearchValue, searchValue, setVideos])
}
