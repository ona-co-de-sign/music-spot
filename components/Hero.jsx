import Image from 'next/image'
import imgHero from '@/img/hero.png'

export default function Hero() {
    return (
        <div className='hero flex-row'>
            <div className='flex-column hero__content'>
                <div className="hero__heading flex-column">
                    <h1>discover, collect music and create your own playlist on <span className='gradient-text'> music </span> spot</h1>
                    <p className='hero__text'>find out musical gems and explore new and trending artists and albums and create your own playlist</p>
                </div>
                <div className="hero__buttons flex-row">
                    <button className='btn-primary hero__btn'>entdecke</button>
                    <button className='btn-outline hero__btn'>erstelle playlist</button>
                </div>
            </div>
            <Image
                alt="Hero"
                src={imgHero}
                width="450"
                height="468"
                placeholder="blur"
                className='hero__image'
            />
        </div>
    )
}
