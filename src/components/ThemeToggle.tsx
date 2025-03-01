import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button 
            onClick={toggleTheme}
            className="theme-toggle"
            title={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
            aria-label={`Cambiar a modo ${isDark ? 'claro' : 'oscuro'}`}
            style={{
                transform: `rotate(${isDark ? 180 : 0}deg)`,
            }}
        >
            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
    );
};

export default ThemeToggle; 