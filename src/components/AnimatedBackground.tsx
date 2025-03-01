import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedBackground = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const animationFrameId = useRef<number>();

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ 
            alpha: true,
            antialias: true
        });

        // Configure renderer
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        // Add canvas to DOM
        if (mountRef.current) {
            mountRef.current.innerHTML = '';
            mountRef.current.appendChild(renderer.domElement);
        }

        // Camera position
        camera.position.z = 2;

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 5000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 5;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        // Create material
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.005,
            color: '#1095c1',
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        // Create mesh
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        // Animation function
        const animate = () => {
            particles.rotation.y += 0.001;
            particles.rotation.x += 0.0005;
            renderer.render(scene, camera);
            animationFrameId.current = window.requestAnimationFrame(animate);
        };

        // Start animation
        animate();

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Mouse movement effect
        const handleMouseMove = (event: MouseEvent) => {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
            
            particles.rotation.x += mouseY * 0.0001;
            particles.rotation.y += mouseX * 0.0001;
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            
            if (animationFrameId.current) {
                window.cancelAnimationFrame(animationFrameId.current);
            }

            // Dispose of resources
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            renderer.dispose();
            
            if (mountRef.current) {
                mountRef.current.innerHTML = '';
            }
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div 
            ref={mountRef} 
            style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none'
            }} 
        />
    );
};

export default AnimatedBackground; 