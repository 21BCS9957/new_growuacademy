import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const createParticle = (): Particle => {
      const maxLife = Math.random() * 300 + 200; // 200-500 frames
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, // Slower horizontal movement
        vy: (Math.random() - 0.5) * 0.5, // Slower vertical movement
        size: Math.random() * 2 + 1, // 1-3px
        opacity: Math.random() * 0.8 + 0.4, // 0.4-1.2
        life: 0,
        maxLife: maxLife
      };
    };

    // Initialize particles
    const particleCount = Math.min(120, Math.floor(canvas.width * canvas.height / 8000));
    particlesRef.current = Array.from({ length: particleCount }, createParticle);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Fade in/out effect
        const lifeCycle = particle.life / particle.maxLife;
        if (lifeCycle < 0.1) {
          // Fade in
          particle.opacity = (lifeCycle / 0.1) * 0.9;
        } else if (lifeCycle > 0.9) {
          // Fade out
          particle.opacity = (1 - lifeCycle) / 0.1 * 0.9;
        }

        // Wrap around screen edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle if life is over
        if (particle.life >= particle.maxLife) {
          particlesRef.current[index] = createParticle();
          return;
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = 'white';
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        zIndex: 0,
        opacity: 0.7 // Increased visibility
      }}
    />
  );
};

export default ParticleBackground;