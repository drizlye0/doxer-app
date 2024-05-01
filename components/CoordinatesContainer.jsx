const colors = {
  red: {
    strokeColor: "#ff0000",
    fillColor: "rgba(255,41,41,0.1)",
    strokeWidth: 2
  },
  yellow: {
    strokeColor: "#Ffff00",
    fillColor: "rgba(232, 245, 39, 0.1)",
    strokeWidth: 2
  }
}


const Coordinates = {
  portales: {
    coordinates: [
      { latitude: 25.85338150817608, longitude: -97.49098163098097 },
      { latitude: 25.84614666134398, longitude: -97.4911093711853 },
      { latitude: 25.847869571433534, longitude: -97.48461976647377 },
      { latitude: 25.853146468603097, longitude: -97.4860480427742 }
    ],
    strokeColor: colors.yellow.strokeColor,
    fillColor: colors.yellow.fillColor,
    strokeWidth: colors.yellow.strokeWidth
  },
  independencia: {
    coordinates: [
      { latitude: 25.84844737019477, longitude: -97.48181967611444 },
      { latitude: 25.852734234568214, longitude: -97.47250913768346 },
      { latitude: 25.840133008523697, longitude: -97.47005519734424 },
      { latitude: 25.837014972237444, longitude: -97.47947399776386 }
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },

  lauroVillar: {
    coordinates: [
      { latitude: 25.85277293876976, longitude: -97.47245326638222 },
      { latitude: 25.85277293876976, longitude: -97.47245326638222 },
      { latitude: 25.84020348502562, longitude: -97.4700003862381 },
      { latitude: 25.843245115407726, longitude: -97.45768569409849 }
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },

  lasAmericas: {
    coordinates: [
      { latitude: 25.83994850352933, longitude: -97.46991254389286 },
      { latitude: 25.841352252833357, longitude: -97.45767027139664 },
      { latitude: 25.83727342784412, longitude: -97.45749391615391 },
      { latitude: 25.835840057273607, longitude: -97.46900964528322 }
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },

  losPalamares: {
    coordinates: [
      { latitude: 25.849963920044345, longitude: -97.55720900886024},
      { latitude: 25.83927869608965, longitude: -97.55692030997898},
      { latitude: 25.83727342784412, longitude: -97.45749391615391 },
      { latitude: 25.835840057273607, longitude: -97.46900964528322 }
    ],
    strokeColor: colors.red.strokeColor,
    fillColor: colors.red.fillColor,
    strokeWidth: colors.red.strokeWidth
  },


}

export default Coordinates
