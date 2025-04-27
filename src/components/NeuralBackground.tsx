import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function NeuralBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: {
                distance: 130,
                links: { opacity: 0.2 },
              },
            },
          },
          particles: {
            color: { value: "#0FF1CE" },
            links: {
              color: "#0FF1CE",
              distance: 120,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.3,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "bounce" },
            },
            number: {
              value: 50,
              density: { enable: true, area: 800 },
            },
            opacity: { value: 0.15 },
            shape: { type: "circle" },
            size: { value: { min: 0.5, max: 2 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
