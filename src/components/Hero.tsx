const Hero = () => {
    return (
        <header className="hero">
            <div className="hero-content">
                <h1>Joaquín González</h1>
                <p>Desarrollador Full Stack JavaScript</p>
            </div>
            <div className="hero-contact">
                <div className="contact-item">
                    <span className="icon">📱</span>
                    <a href="tel:+56978920114">+(56) 9 78920114</a>
                </div>
                <div className="contact-item">
                    <span className="icon">📧</span>
                    <a href="mailto:joaquin.gonzalezparada@gmail.com">joaquin.gonzalezparada@gmail.com</a>
                </div>
                <div className="contact-item">
                    <span className="icon">💼</span>
                    <a href="https://linkedin.com/in/joaquín-gonzález" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className="contact-item">
                    <span className="icon">🌐</span>
                    <a href="https://github.com/j-gonzalezp" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div className="contact-item">
                    <span className="icon">📄</span>
                    <a href="https://drive.google.com/file/d/1RunIp3dVRFd5FNwUlr1RvXreC57ITrxp/view?usp=sharing" download>Descargar CV</a>
                </div>
            </div>
        </header>
    );
};

export default Hero; 