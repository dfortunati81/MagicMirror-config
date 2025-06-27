/* MagicMirror² Config with MMM-BackgroundSlideshow (updated for proper image loading) */

let config = {
  address: "0.0.0.0",      // Listen on all network interfaces
  port: 8080,
  ipWhitelist: [],           // [] = allow all
  useHttps: false,
  language: "en",
  timeFormat: 24,
  units: "metric",

  modules: [
    { module: "alert" },
    { module: "clock", position: "top_left" },
    // === Insert the Combined Calendar block below ===
    {
      module: 'calendar',
      header: 'Combined Calendar',
      position: 'top_left',
      config: {
        maximumEntries: 10,
        maximumNumberOfDays: 365,
        pastDaysCount: 0,
        displaySymbol: true,
        defaultSymbol: 'calendar',
        updateInterval: 5 * 60 * 1000,   // every 5 minutes
        fade: true,
        fadePoint: 0.25,
        tableClass: 'small',

        // Global color flags
        coloredText: true,
        coloredSymbol: true,
        coloredBorder: false,
        coloredBackground: false,

        calendars: [
          // US Holidays feed
          {
            symbol: 'calendar-check',
            url: 'https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics',
            fetchInterval: 7 * 24 * 60 * 60 * 1000,  // once per week
            color: '#ffffff'
          },
          // Your Google Calendar feed with custom color
          {
            symbol: 'calendar',
            url: 'https://calendar.google.com/calendar/ical/fortunatisolutions%40gmail.com/public/basic.ics',
            fetchInterval: 5 * 60 * 1000,         // every 5 minutes
            color: '#9370DB'
          }
        ]
      }
    },
    // === End Combined Calendar block ===,
    { module: "compliments", 
      position: "lower_third",
      classes: "shifted2",
    },
    {
      module: "weather",
      position: "top_right",
      config: { weatherProvider: "openmeteo", type: "current", lat: 33.7028, lon: -117.9913 }
    },
    {
      /* Don't share your credentials! */
      module: "MMM-OnSpotify",
      position: "bottom_right", /* bottom_left, bottom_center */
      config: {
        clientID: "d6ce999cdb3e4b0ea56fb21f6bc2d290",
        clientSecret: "3a6c159e5611406583fc370dd7955df4",
        accessToken: "BQB0OHywfYHfeO_ofCzdRiT1ZPLav7Sv4hK-mJlvUqC4aGJEW21mmqoQH3qnZJEPslnid1oDcI9sMNyO9qYbxZrAeP_wbyAwqLjop900G_YpqZzQcRkIaXQHnDo53lDNInqXc9olNmeKP8pP93K6jAWx0lK76z7KZKF1CPP5GPBCyuvbR3Z1A5sVeAV2mbllmAUE5GPJ9Dn_5J4RTff5BO0kAcZFth4VxB14yForZiKKIETuRw",
        refreshToken: "AQAz66-iHvEhOV58rag3TOphTgF148l3myliBYYIsOLVzh2nb993tCGyVD7iMnUvr0a7D7CL2v1JDfJaIOs1ZC0GB43N4nocRYIFBmZ4AtbPDBlfpuUlKpci64KcBYgI1ic",
        /* Add here your configurations */
      }
    },
    {
      module: "weather",
      position: "top_right",
      header: "Weather Forecast",
      config: { weatherProvider: "openmeteo", type: "forecast", lat: 33.7028, lon: -117.9913 }
    },
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [
          { title: "New York Times", url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml" }
        ],
        showSourceTitle: true,
        showPublishDate: true,
        broadcastNewsFeeds: true,
        broadcastNewsUpdates: true
      }
    },
    {
      module: 'MMM-Globe',
      position: 'middle_center',  // place module in center of the screen
      config: {
        earthImage: 'modules/MMM-Globe/images/earth.jpg',
        imageSize: 400,             // 20% smaller: reduce imageSize by 20% (e.g., from 600 to 480)
        style: 'centralAmericaDiscNat',
        ownImagePath: '',             // leave ownImagePath blank to use live images
        updateInterval: 10 * 60 * 1000    // rotate every 60s
      }
    },
    {
      module: "MMM-MoonPhase",
      position: "top_center",
      classes: "shifted",  // applies your CSS variable shift

      // Only one config: block!
      config: {
        updateInterval: 43200000,
        hemisphere: "N",
        resolution: "detailed",
        basicColor: "white",
        title: false,
        phase: false,
        nextFull: false,
        size: 120,
        moonAlign: "center",
        textAlign: "center",
        alpha: 0.7,
        riseAndSet: {
          display: true,
          lon: -118.0,
          lat: 34.0,
          gmtOffset: -7.0
        }
      }
    },

    // Disable ImageSlideshow if unused
    //{
    //  module: "MMM-ImageSlideshow",
    //  position: "top_center",
    //  disabled: true,
    //  config: { imagePaths: ["modules/MMM-ImageSlideshow/exampleImages"] }
    //},

    /* Background Slideshow */
    /*
    {
      module: "MMM-BackgroundSlideshow",
      position: "fullscreen_below",
      config: {
        // Path must point to folder with images (no trailing slash)
        imagePaths: ["modules/MMM-BackgroundSlideshow/exampleImages/subfolder"],
        // Only load these extensions
        fileNameFilter: /\.(jpg|jpeg|png|gif)$/i,
        // Display options
        slideshowSpeed: 10000,
        transitionImages: false,
        transitionSpeed: "1s",
        randomizeImageOrder: false,
        // Performance/resizing
        resizeImages: true,
        maxWidth: 1920,
        maxHeight: 1080,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // Gradient overlay for readability
        gradient: [
          "rgba(0,0,0,0.75) 0%",
          "rgba(0,0,0,0) 40%",
          "rgba(0,0,0,0) 80%",
          "rgba(0,0,0,0.75) 100%"
        ]
      }
    }
    */
  ]
};

/*************** DO NOT EDIT BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }