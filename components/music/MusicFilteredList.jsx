import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/fontawesome-free-solid';
import MusicPlayer from './MusicPlayer';

export default function MusicFilteredList({ filtedMusic }) {
    console.log("MUSIC", filtedMusic)
    return (
        <ul className='music__list flex-row-center'>
            {filtedMusic && filtedMusic.map(({ artistName, trackName, artworkUrl100, previewUrl, primaryGenreName }) => {
                return <li key={previewUrl} className='music__item flex-column'>
                    <img src={artworkUrl100} alt={trackName} width="100" height="100" className='music__image' />
                    <div className='music__content'>
                        <h3 className='short-text'>{artistName}</h3>
                        <p className='track-name short-text'>{trackName}</p>
                    </div>
                    <div className="music__list-footer flex-row">
                        <p className='music__genre flex-row'>
                            <FontAwesomeIcon icon={faMusic} className="icon" width={15} />
                            {primaryGenreName}
                        </p>
                        <MusicPlayer previewUrl={previewUrl} />
                    </div>
                </li>
            })}
        </ul>
    )
}
