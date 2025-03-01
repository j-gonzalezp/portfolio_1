import { useState, useRef } from 'react';
import { FaExpand, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';

interface Project {
    title: string;
    url: string;
    description: string;
    technologies: string;
    story: string;
}

const projects: Project[] = [
    {
        title: "Melody Explorer",
        url: "https://elemento99.github.io/melody_explorer/",
        description: "Plataforma para explorar melodías generadas a partir de parámetros definidos por el usuario.",
        technologies: "HTML5, CSS, JS",
        story: `Melody Explorer surgió de mi pasión por la música y las matemáticas. 
        Quería crear una herramienta que permitiera explorar la relación entre los números 
        y las melodías de una manera interactiva y educativa.
        
        El proyecto me permitió profundizar en la teoría musical y su relación con las matemáticas,
        además de aprender sobre la Web Audio API y cómo generar sonido directamente desde el navegador.
        Fue un desafío interesante balancear la complejidad matemática con una interfaz intuitiva.`
    },
    {
        title: "FlexFit",
        url: "https://elemento99.github.io/FlexFit/",
        description: "Generador de ejercicios aleatorios para facilitar el entreno desde casa.",
        technologies: "Bootstrap, React, supabase",
        story: `FlexFit nació de la necesidad de mantener una rutina de ejercicios durante el confinamiento. 
        La idea era crear una herramienta que generara rutinas aleatorias pero coherentes, 
        considerando el equipamiento disponible en casa y el nivel de condición física del usuario.
        
        El mayor desafío fue crear un algoritmo que generara combinaciones de ejercicios que tuvieran 
        sentido y fueran seguros de realizar. También fue importante hacer la interfaz lo más simple 
        posible para que pudiera usarse incluso durante el ejercicio.`
    }

];

const ProjectSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const iframeRefs = useRef<(HTMLIFrameElement | null)[]>([]);

    const handlePrevious = () => {
        setCurrentSlide(prev => prev === 0 ? projects.length - 1 : prev - 1);
    };

    const handleNext = () => {
        setCurrentSlide(prev => prev === projects.length - 1 ? 0 : prev + 1);
    };

    const toggleFullscreen = async (index: number) => {
        const iframe = iframeRefs.current[index];
        if (!iframe) return;

        if (!document.fullscreenElement) {
            try {
                await iframe.requestFullscreen();
            } catch (err) {
                console.error('Error attempting to enable fullscreen:', err);
            }
        } else {
            await document.exitFullscreen();
        }
    };

    return (
        <section className="projects">
            <h2>Proyectos</h2>
            <div className="slider">
                {projects.map((project, index) => (
                    <div 
                        key={project.title}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        <h3>{project.title}</h3>
                        <div className="iframe-container">
                            <iframe 
                                ref={el => iframeRefs.current[index] = el}
                                src={project.url} 
                                title={project.title}
                            />
                            <div className="iframe-controls">
                                <button 
                                    onClick={() => toggleFullscreen(index)}
                                    className="icon-button"
                                    aria-label="Pantalla completa"
                                >
                                    <FaExpand />
                                    <span>Pantalla Completa</span>
                                </button>
                                <a 
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-button"
                                    aria-label="Abrir en nueva pestaña"
                                >
                                    <FaExternalLinkAlt />
                                    <span>Abrir</span>
                                </a>
                            </div>
                        </div>
                        <p>{project.description}</p>
                        <p>Tecnologías: {project.technologies}</p>
                        
                        <details className="project-details">
                            <summary>
                                <FaChevronDown /> Historia del Proyecto
                            </summary>
                            <div style={{ whiteSpace: 'pre-line' }}>
                                {project.story}
                            </div>
                        </details>
                    </div>
                ))}
            </div>
            <div className="slider-controls">
                <button onClick={handlePrevious}>Anterior</button>
                <button onClick={handleNext}>Siguiente</button>
            </div>
        </section>
    );
};

export default ProjectSlider; 