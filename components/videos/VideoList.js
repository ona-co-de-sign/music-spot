import { useState, useRef } from 'react';
import Image from 'next/image';
import iconPlay from '@/icons/icon-play.png';

export default function VideoList({ videos }) {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const videoRef = useRef();

    const playVideo = (url, trackName, artistName) => {
        setTitle(trackName);
        setArtist(artistName);
        videoRef.current.src = url;
        videoRef.current.hidden = false;
        videoRef.current.play();
    }

    if (!videos) return null;

    return (
        <div className='video flex-row'>
            <ul className='video__list'>
                {videos.length > 0 && videos.map(({ artistName, trackName, artworkUrl100, previewUrl }, i) => {
                    return <li key={previewUrl}
                        onClick={() => playVideo(previewUrl, trackName, artistName)}
                        style={{ backgroundImage: "url(" + artworkUrl100 + ")" }}
                        className="video-list-item "
                    >
                        <div className="video-preview-overlay flex-column-center">
                            <Image src={iconPlay}
                                alt="icon"
                                width="50"
                                height="50"
                                className='play-icon-img flex-row-center'
                            />
                        </div>
                    </li>
                })}
            </ul>
            <div className="video-player">
                <video width="550" controls ref={videoRef} hidden>
                    Your browser does not support the video tag.
                </video>
                {/* heading */}
                {title !== '' ?
                    <div className="video-player__heading">
                        <h3>{title}</h3>
                        <p>{artist}</p>
                    </div> : null
                }
            </div>
        </div >
    )
}