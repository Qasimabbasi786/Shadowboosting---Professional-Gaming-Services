import React, { useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { primaryColorRgb } = useTheme();
  const primaryColorRgbRef = useRef(primaryColorRgb);

  // Update the ref when theme changes
  useEffect(() => {
    primaryColorRgbRef.current = primaryColorRgb;
  }, [primaryColorRgb]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Shadow-themed particles with varying sizes and opacity
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      maxOpacity: number;
      pulseSpeed: number;
      shadowOffset: number;
    }> = [];

    // Create fewer, more impactful particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.4 + 0.1,
        maxOpacity: Math.random() * 0.6 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        shadowOffset: Math.random() * 4 + 2
      });
    }

    // Floating shadow orbs
    const shadowOrbs: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      pulsePhase: number;
    }> = [];

    for (let i = 0; i < 8; i++) {
      shadowOrbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 40 + 20,
        opacity: Math.random() * 0.15 + 0.05,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    let animationFrame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animationFrame++;

      // Draw shadow orbs first (background layer)
      shadowOrbs.forEach((orb) => {
        // Update position
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Wrap around edges
        if (orb.x < -orb.size) orb.x = canvas.width + orb.size;
        if (orb.x > canvas.width + orb.size) orb.x = -orb.size;
        if (orb.y < -orb.size) orb.y = canvas.height + orb.size;
        if (orb.y > canvas.height + orb.size) orb.y = -orb.size;

        // Pulsing effect
        orb.pulsePhase += 0.02;
        const pulseOpacity = orb.opacity * (0.5 + 0.5 * Math.sin(orb.pulsePhase));

        // Create gradient for shadow effect
        const gradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.size
        );
        gradient.addColorStop(0, `rgba(0, 0, 0, ${pulseOpacity * 0.8})`);
        gradient.addColorStop(0.4, `rgba(0, 0, 0, ${pulseOpacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw main particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Pulsing opacity
        particle.opacity += particle.pulseSpeed;
        if (particle.opacity > particle.maxOpacity || particle.opacity < 0.1) {
          particle.pulseSpeed *= -1;
        }

        // Draw shadow first
        ctx.beginPath();
        ctx.arc(
          particle.x + particle.shadowOffset, 
          particle.y + particle.shadowOffset, 
          particle.size, 
          0, 
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(0, 0, 0, ${particle.opacity * 0.3})`;
        ctx.fill();

        // Draw main particle with theme color
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Create a subtle glow effect
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        glowGradient.addColorStop(0, `rgba(${primaryColorRgbRef.current}, ${particle.opacity})`);
        glowGradient.addColorStop(1, `rgba(${primaryColorRgbRef.current}, 0)`);
        
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Draw connections between nearby particles
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const connectionOpacity = (1 - distance / 120) * 0.1;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(${primaryColorRgbRef.current}, ${connectionOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Add subtle animated grid pattern
      if (animationFrame % 120 === 0) { // Update every 2 seconds
        const gridOpacity = 0.02;
        const gridSize = 50;
        
        ctx.strokeStyle = `rgba(${primaryColorRgbRef.current}, ${gridOpacity})`;
        ctx.lineWidth = 0.5;
        
        // Vertical lines
        for (let x = 0; x < canvas.width; x += gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
        
        // Horizontal lines
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

export default ParticleBackground;