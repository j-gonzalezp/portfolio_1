import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import ProjectSlider from './components/ProjectSlider';
import './styles/index.css';

const Aside = () => (
    <aside>
        <h2>Resumen</h2>
        <p>Matemático por formación, desarrollador por pasión y curioso por naturaleza. Con una sólida base lógica, he aplicado mi conocimiento a proyectos educativos que integran tecnología y aprendizaje.</p>
        <p>Mi objetivo es seguir creciendo profesionalmente en el mundo del desarrollo Full Stack. Soy un defensor de la innovación colaborativa y mi pasión es aprender, enseñar y crear.</p>
        <p><em>"Donde otros ven un problema, yo veo una oportunidad de crear."</em></p>

        <h2>Aptitudes</h2>
        <h3>Técnicas</h3>
        <p>JavaScript, NodeJS, Next.js, SQL, Python, React, Bootstrap, R</p>
        <h3>Blandas</h3>
        <p>Trabajo en equipo, comunicación efectiva, excelentes relaciones interpersonales.</p>

        <h2>Experiencia</h2>
        <ul>
            <li>Profesor de Matemática, I. Agrícola Pascual Baburriza (2024 - presente)</li>
            <li>Profesor nivelación Matemática, DUOC UC (2020 - 2023)</li>
        </ul>

        <h2>Formación</h2>
        <ul>
            <li>Adalid, Santiago: Especialización Front-End (Cursando)</li>
            <li>Talento digital, Santiago: Full Stack JavaScript (2024)</li>
            <li>Teleduc UC, Santiago: Programación con macros en Visual Basic para Excel (2022)</li>
            <li>PUC Chile, Santiago: Pedagogía en educación media mención Matemática (2019)</li>
        </ul>

        <h2>Idiomas</h2>
        <ul>
            <li>Español: Nativo</li>
            <li>Inglés: Intermedio (B1), certificado TOEFL</li>
        </ul>
    </aside>
);

const App = () => {
    return (
        <>
            <AnimatedBackground />
            <main className="container">
                <Hero />
                <div className="content-wrapper">
                    <Aside />
                    <ProjectSlider />
                </div>
            </main>
        </>
    );
};

export default App;
