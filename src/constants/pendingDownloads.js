const pendingDownloads = [
  {
    client: "Lojas Havan",
    clientId: 0,
    pendings: [
      { id: 10, name: "Inaug. Campinas",downloads: [
        {id: 1 ,name: "Bairro Maria", uriSound: "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3", uriDownload: ""},
        {id: 1 ,name: "Bairro João", uriSound: "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3", uriDownload: ""}
      ] },
      { id: 20, name: "Posto Havan", downloads: [] },
      { id: 30, name: "Mídia Extra Colchão", downloads: [] }
    ]
  },
  {
    client: "Casas Bahia",
    clientId: 1,
    pendings: [
      { id: 110, name: "Mídia Extra", downloads: [
        {id: 1 ,name: "Mídia extra bike", uriSound: "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3", uriDownload: ""},
        {id: 2 ,name: "Mídia extra TV", uriSound: "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3", uriDownload: ""},
        {id: 3 ,name: "Mídia extra sofá", uriSound: "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3", uriDownload: ""}
      ] },
      { id: 220, name: "Promoção natal", downloads: [
        {id: 1 ,name: "Promoção natal bike", uriSound: "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3", uriDownload: ""},
        {id: 2 ,name: "Promoção natal TV", uriSound: "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3", uriDownload: ""},
        {id: 3 ,name: "Promoção natal sofá", uriSound: "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3", uriDownload: ""}
      ] },
      { id: 330, name: "Testemunhal 30 seg", downloads: [
        {id: 1 ,name: "Testemunhal 30 seg bike", uriSound: "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3", uriDownload: ""},
        {id: 2 ,name: "Testemunhal 30 seg TV", uriSound: "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3", uriDownload: ""},
        {id: 3 ,name: "Testemunhal 30 seg sofá", uriSound: "https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3", uriDownload: ""}
      ]}
    ]
  }
];

module.exports = pendingDownloads