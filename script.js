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
      value: 80,
      density: {
        enable: true,
        area: 800
      }
    },

    color: {
      value: "#9ca3af"
    },

    links: {
      enable: true,
      distance: 140,
      color: "#d1d5db",
      opacity: 0.35,
      width: 1
    },

    move: {
      enable: true,
      speed: 0.6,
      outModes: {
        default: "bounce"
      }
    },

    opacity: {
      value: 0.6
    },

    size: {
      value: { min: 1, max: 3 }
    }
  },

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },

    modes: {
      repulse: {
        distance: 90,
        duration: 0.4
      }
    }
  },

  detectRetina: true
});
