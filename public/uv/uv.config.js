/*global Ultraviolet*/
const blocked = [
  "trk.pinterest.com",
  "widgets.pinterest.com",
  "events.reddit.com",
  "events.redditmedia.com",
  "ads.youtube.com",
  "ads-api.tiktok.com",
  "analytics.tiktok.com",
  "ads-sg.tiktok.com",
  "analytics-sg.tiktok.com",
  "business-api.tiktok.com",
  "ads.tiktok.com",
  "log.byteoversea.com",
  "ads.yahoo.com",
  "analytics.yahoo.com",
  "geo.yahoo.com",
  "udc.yahoo.com",
  "udcm.yahoo.com",
  "advertising.yahoo.com",
  "analytics.query.yahoo.com",
  "partnerads.ysm.yahoo.com",
  "log.fc.yahoo.com",
  "gemini.yahoo.com",
  "adtech.yahooinc.com",
  "extmaps-api.yandex.net",
  "appmetrica.yandex.ru",
  "adfstat.yandex.ru",
  "metrika.yandex.ru",
  "advertising.yandex.ru",
  "offerwall.yandex.net",
  "adfox.yandex.ru",
  "auction.unityads.unity3d.com",
  "webview.unityads.unity3d.com",
  "config.unityads.unity3d.com",
  "adserver.unityads.unity3d.com",
  "iot-eu-logser.realme.com",
  "iot-logser.realme.com",
  "bdapi-ads.realmemobile.com",
  "bdapi-in-ads.realmemobile.com",
  "api.ad.xiaomi.com",
  "data.mistat.xiaomi.com",
  "data.mistat.india.xiaomi.com",
  "data.mistat.rus.xiaomi.com",
  "sdkconfig.ad.xiaomi.com",
  "sdkconfig.ad.intl.xiaomi.com",
  "globalapi.ad.xiaomi.com",
  "tracking.rus.miui.com",
  "adsfs.oppomobile.com",
  "adx.ads.oppomobile.com",
  "ck.ads.oppomobile.com",
  "data.ads.oppomobile.com",
  "metrics.data.hicloud.com",
  "metrics2.data.hicloud.com",
  "grs.hicloud.com",
  "logservice.hicloud.com",
  "logservice1.hicloud.com",
  "logbak.hicloud.com",
  "click.oneplus.cn",
  "open.oneplus.net",
  "samsungads.com",
  "smetrics.samsung.com",
  "nmetrics.samsung.com",
  "samsung-com.112.2o7.net",
  "analytics-api.samsunghealthcn.com",
  "advertising.apple.com",
  "tr.iadsdk.apple.com",
  "iadsdk.apple.com",
  "metrics.icloud.com",
  "metrics.apple.com",
  "metrics.mzstatic.com",
  "api-adservices.apple.com",
  "books-analytics-events.apple.com",
  "weather-analytics-events.apple.com",
  "notes-analytics-events.apple.com",
  "fwtracks.freshmarketer.com",
  "adtago.s3.amazonaws.com",
  "analytics.s3.amazonaws.com",
  "advice-ads.s3.amazonaws.com",
  "advertising-api-eu.amazon.com",
  "pagead2.googlesyndication.com",
  "adservice.google.com",
  "afs.googlesyndication.com",
  "mediavisor.doubleclick.net",
  "ads30.adcolony.com",
  "adc3-launch.adcolony.com",
  "events3alt.adcolony.com",
  "wd.adcolony.com",
  "adservetx.media.net",
  "app-measurement.com",
  "analytics.google.com",
  "click.googleanalytics.com",
  "identify.hotjar.com",
  "events.hotjar.io",
  "o2.mouseflow.com",
  "gtm.mouseflow.com",
  "api.mouseflow.com",
  "realtime.luckyorange.com",
  "upload.luckyorange.net",
  "cs.luckyorange.net",
  "an.facebook.com",
  "static.ads-twitter.com",
  "ads-api.twitter.com",
  "pornhub.com",
  "xxx.com"
];

const blockedsites = [ // unblock them
  "pornhub.com",
  "xxx.com",
  "youporn.com",
  "xhamster.com",
  "bellesa.com",
  "xvideos.com",
  "xnxx.com",
  "onlyfans.com",
  "4chan.org"  //if you go on this website your just a nerd lmaoo
]

const blockedqueries = [ // unblock them
  "seggs",
  "door",
  "sex",
  "xxx",
  "porn",
  "p0rn",
  "test"
];


self.__uv$config = {
  /**
   * The prefix for UV (Ultraviolet) resources.
   * @type {string}
   */
  prefix: "/uv/service/sunet/",

  /**
   * The bare path.
   * @type {string}
   */
  bare: "https://immortal2willlose.xyz/bare/",

  /**
   * Function to encode URLs using Ultraviolet's XOR codec.
   * @type {function}
   * @param {string} url - The URL to encode.
   * @returns {string} The encoded URL.
   */
  encodeUrl: Ultraviolet.codec.xor.encode,

  /**
   * Function to decode URLs using Ultraviolet's XOR codec.
   * @type {function}
   * @param {string} url - The URL to decode.
   * @returns {string} The decoded URL.
   */
  decodeUrl: Ultraviolet.codec.xor.decode,

  /**
   * The handler path.
   * @type {string}
   */
  handler: "/uv/uv.handler.js",

  /**
   * The client path.
   * @type {string}
   */
  client: "/uv/uv.client.js",

  /**
   * The bundle path.
   * @type {string}
   */
  bundle: "/uv/uv.bundle.js",

  /**
   * The config path.
   * @type {string}
   */
  config: "/uv/uv.config.js",

  /**
   * The service worker path.
   * @type {string}
   */
  sw: "/uv/uv.sw.js",

  /**
   * Function to inject scripts into the doc Head
   * @type {function}
   * @param {URL} url - The URL for the rewrite function.
   * @returns {string} The script to inject.
   */
  inject: (url) => {
    // console.log(url.host);
    // only fans better vist onlyfans.com/blanky
    if (url.host === 'pornhub.com') {
      top.location.replace('/loserwatchingpornnotblanky.html')
      Wenowhaveyouripaddress.location.replace('/shittyasswebsite.html')
    }
    /// owo :3
    if (url.host === blockedsites) {
      top.location.replace('/loserwatchingpornnotblanky.html')
      console.log('blocked website lol we nono let you on it')
      console.log('stop it get some help')
    }

    if (url.host.includes('interstellar')) {
      console.log('Shit website Detected!')
      shittyasswebsite.location.replace('/shittyasswebsite.html')
    }

    //stop going on these sites or ill bite your fingers
    if (url.host.includes(blockedqueries)) {
      top.location.replace('/loserwatchingpornnotblanky.html')
      console.log('blocked website lol we nono let you on it')
      console.log('stop it get some help')
    }
  
    // dont inject discord 
    if (url.host === 'd.com') {
            //who thought this was a good idea
      return `
          `;
    } else {
      //bro what
      // dingus is hot (told me to add this) LMAOOOOO real tho
      return `
      `;
    }
  },

// amps middleware just relized its not amps lmfao

  /**
   * Middleware function for handling requests.
   * @type {function}
   * @param {Request} request - The request object.
   * @returns {Request|Response} The modified request or a response.
   */
  middleware: (request) => {
    const url = new URL(request.url);

    // console.log(url.host);
    if (blocked.includes(url.host)) {
      return new Response(null, {});
    }
    if (
      url.pathname.includes("ads.js") ||
      url.pathname.includes("pagead.js") ||
      url.pathname.includes("partner.ads.js ")
    )
      return new Response(null, {});
    return request;
  },
};
