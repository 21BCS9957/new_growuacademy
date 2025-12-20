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

    // Create particles - Increased intensity
    const createParticle = (): Particle => {
      const maxLife = Math.random() * 400 + 300; // 300-700 frames (longer life)
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8, // Increased movement speed
        vy: (Math.random() - 0.5) * 0.8, // Increased movement speed
        size: Math.random() * 1.5 + 0.5, // 0.5-2px (smaller particles)
        opacity: Math.random() * 1 + 0.6, // 0.6-1.6 (brighter)
        life: 0,
        maxLife: maxLife
      };
    };

    // Initialize particles - Increased density
    const particleCount = Math.min(300, Math.floor(canvas.width * canvas.height / 3000)); // Increased from 120 and reduced divisor from 8000 to 3000
    particlesRef.current = Array.from({ length: particleCount }, createParticle);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Fade in/out effect - Enhanced intensity
        const lifeCycle = particle.life / particle.maxLife;
        if (lifeCycle < 0.15) {
          // Fade in
          particle.opacity = (lifeCycle / 0.15) * 1.2; // Brighter fade in
        } else if (lifeCycle > 0.85) {
          // Fade out
          particle.opacity = (1 - lifeCycle) / 0.15 * 1.2; // Brighter fade out
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

        // Draw particle - Enhanced glow and intensity
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'; // Brighter white
        ctx.shadowBlur = 15; // Increased glow
        ctx.shadowColor = 'rgba(255, 255, 255, 1)'; // Brighter glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add extra glow layer for intensity
        ctx.shadowBlur = 25;
        ctx.shadowColor = 'rgba(255, 215, 0, 0.3)'; // Golden glow
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
        opacity: 0.9 // Increased visibility for more intensity
      }}
    />
  );
};

export default ParticleBackground;