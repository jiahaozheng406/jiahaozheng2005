tsParticles.load("tsparticles", {
  fullScreen: {
    enable: false
  },

  background: {
    color: {
      value: "#f8fafc"
    }
  },

  fpsLimit: 60,

  particles: {
    number: {
      value: 110,
      density: {
        enable: true,
        area: 800
      }
    },

    color: {
      value: ["#2563eb", "#06b6d4", "#8b5cf6", "#f59e0b"]
    },

    links: {
      enable: true,
      distance: 155,
      color: "#93c5fd",
      opacity: 0.42,
      width: 1.1
    },

    move: {
      enable: true,
      speed: 0.9,
      outModes: {
        default: "bounce"
      }
    },

    opacity: {
      value: 0.72
    },

    size: {
      value: { min: 1.2, max: 4.2 }
    }
  },

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: ["repulse", "grab"]
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },

    modes: {
      repulse: {
        distance: 95,
        duration: 0.4
      },
      grab: {
        distance: 180,
        links: {
          opacity: 0.55
        }
      },
      push: {
        quantity: 4
      }
    }
  },

  detectRetina: true
});
