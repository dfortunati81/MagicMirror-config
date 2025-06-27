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
    {
      module: "calendar",
      header: "US Holidays",
      position: "top_left",
      config: {
        calendars: [{
          symbol: "calendar-check",
          url: "https://ics.calendarlabs.com/76/mm3137/US_Holidays.ics",
          fetchInterval: 7 * 24 * 60 * 60 * 1000
        }]
      }
    },
    { module: "compliments", 
      position: "bottom_center",
      classes: "shifted2",
    },
    {
      module: "weather",
      position: "top_right",
      config: { weatherProvider: "openmeteo", type: "current", lat: 33.7028, lon: -117.9913 }
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
        ownImagePath: '',             // leave ownImagePath blank to use live images
        updateInterval: 10*60*1000    // rotate every 60s
      }
    },
    {
      module: 'MMM-MyCommute',
      position: 'top_left',  // or choose another region
      header: 'Commute Time',
      config: {
        api_key: 'YOUR_GOOGLE_MAPS_API_KEY',
        origin: '123 Main St, YourCity',
        destination: '456 Elm St, YourCity',
        travel_mode: 'DRIVING',
        updateInterval: 600000  // 10 minutes
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