Here's a React component for a particle background that you can use in your luxury FashionTV cosmetics website. This component uses the `react-tsparticles` library to create an elegant particle animation. Make sure to install the library first if you haven't done so:

npm install react-tsparticles

Now, you can create the `ParticleBackground.tsx` component as follows:

// src/components/animations/ParticleBackground.tsx

import React from 'react';
import Particles from 'react-tsparticles';

const ParticleBackground: React.FC = () => {
  const particlesInit = async (main: any) => {
    // You can add custom shapes or presets here if needed
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#ffffff", // Background color
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 2,
            },
          },
        },
        particles: {
          color: {
            value: "#ff69b4", // Particle color (pink)
          },
          links: {
            color: "#ff69b4", // Link color (pink)
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50, // Number of particles
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "circle", // You can change this to other shapes if desired
          },
          size: {
            value: 5,
            animation: {
              enable: true,
              speed: 40,
              minimumValue: 0.1,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;

### Usage

You can use this `ParticleBackground` component in your main application or any specific page component like this:

// src/App.tsx or any other component

import React from 'react';
import ParticleBackground from './components/animations/ParticleBackground';

const App: React.FC = () => {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <ParticleBackground />
      {/* Your other components go here */}
      <h1 style={{ color: '#ff69b4', position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        Welcome to FashionTV Cosmetics
      </h1>
    </div>
  );
};

export default App;

### Notes
- Adjust the particle options in the `ParticleBackground` component to fit your design needs.
- The colors used are pink (`#ff69b4`) for particles and links, and white (`#ffffff`) for the background, aligning with your luxury theme.
- You can customize the number of particles, their size, and other properties to achieve the desired effect.