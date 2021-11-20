import VideoShowcase from './section_videoShowcase.module.css'

export default function section_videoShowcase() {
    return (
        <div className={VideoShowcase.background}>
        <p className={VideoShowcase.h1_videoShowcase}>VIDEO SHOWCASE</p>
        <iframe className={VideoShowcase.video}  src="https://www.youtube.com/embed/JdWQJq2OkJs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        
        
    )
}
