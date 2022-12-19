import { useState, useEffect } from 'react';
import Image from 'next/image';
import iconPlay from '@/icons/icon-play.png';
import iconStop from '@/icons/icon-stop.png';

export default function MusicPlayer({ previewUrl }) {
    const [audio, setAudio] = useState(null)
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        setPlaying(!playing)
        setAudio(new Audio(previewUrl))
    }, [])


    const playAudio = () => {
        audio.play()
        setPlaying(true)
    }

    const stopAudio = () => {
        audio.pause()
        setPlaying(false)
    }

    if (!audio) return null;

    return (
        <div onClick={() => audio.paused ? playAudio() : stopAudio()} className="audio-player-btn">
            {playing ? <Image
                src={iconPlay}
                alt="play music icon"
                width="15"
                height="15"
                className='icon-music-player icon-stop'
            />
                : <Image
                    src={iconStop}
                    alt="stop music icon"
                    width="15"
                    height="15"
                    className='icon-music-player icon-stop'
                />
            }
        </div>
    )
}
