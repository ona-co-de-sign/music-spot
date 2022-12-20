import { useState } from 'react';
import { useVideo } from '@/hooks/useVideo';
import VideoForm from './VideoForm'
import VideoList from './VideoList'

export default function Videos() {
    const [searchValue, setSearchValue] = useState('');
    const [videos, setVideos] = useState('');
    useVideo(searchValue, setVideos);
    return (
        <>
            <VideoForm searchValue={searchValue} setSearchValue={setSearchValue} />
            <VideoList videos={videos} />
        </>
    )
}
