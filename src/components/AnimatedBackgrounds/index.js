import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ConnectedLines = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
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
            value: "#020202",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: ["grab", "connect"],
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 3,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 120,
            enable: true,
            opacity: 0.2,
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
              area: 600,
            },
            value: 90,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "line",
            options: {
                close: true,
                fill: true,
            },
          },
          size: {
            value: { min: 1, max: 1 },
          },
        },
        detectRetina: true,
        pauseOnOutsideViewport: true,
        autoPlay: true,
      }}
    />
  );
};