import VideoShowcase from './Video.module.css'
export default function Video() {
  return (
    <div className={VideoShowcase.background}>
      <iframe
        className={VideoShowcase.video}
        src="https://www.youtube.com/embed/JdWQJq2OkJs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
