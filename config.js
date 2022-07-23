let topTitleDiv = "<h4>Climate | Agriculture | Irrigation</h4>";

let titleDiv =
  "<h1>You may have to pay more for food as drought, irrigation regulation starve Fresno’s agriculture of water</h1>";

let bylineDiv = "<p class='byline'>By AREENA ARORA, KUNLE FALAYI and CHUQIN JIANG</p>";

let descriptionDiv =
  '<p>Americans may have to pay more for food as increasing drought continues to threaten production in America’s number one food producing county, Fresno.</p>' +
  '<p>The county is located in one of America’s driest regions. Farms in these regions are forced to find innovative solutions to provide irrigation as legislation limits the amount of water intake for irrigation.</p>' +
  '<p>More words, More words,More words,More words,More words,More words,More words,More words,More words,More words,</p>' +
  '<p>More words, More words,More words,More words,More words,More words,More words,More words,More words,More words,</p>' +
  '<p style="text-align:center;margin-top:50px">Scroll to see the map<br>▼</p>';

let footerDiv =
  '<p>This story is based on data by the <a href="https://droughtmonitor.unl.edu/DmData/GISData.aspx">US Drought Monitor</a> and tutorial by <a href="https://pointsunknown.nyc/">Points Unknown</a></p>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a></p>';

let divChapter1 =
  "<p>US is experiencing hotter summer with more droughts.</p>";

let divChapter2 =
  "<p>This is the drought map on July 19, 2000.</p>";

let divChapter3 =
  "<p>This is the drought map 22 years later.</p>";

let divChapter4 =
  "<p>Now fly to California.</p>";

let divChapter5 =
  "<p>Now fly to Fresno.</p>";

/*
let divChapter4 =
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Overall collapse of subway usage</h3>" +
  '<div style="max-width:1200px; margin-left:auto; margin-right:auto"><img src="images/WeekdaySubway.svg"></div>' +
  "<p class='imageCredit' style='max-width:600px; margin-left:auto; margin-right:auto'><a href='https://qri.cloud/nyc-transit-data/turnstile_daily_counts_2020'>NYC Subway Turnstile Counts - 2020 (Qri)</a></p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>As can be seen in the chart above, subway usage collapsed abruptly right after the first COVID-19 case was documented in the city. It was in fact the declaration of a state of emergency, on March 7, 2020, that precipitated this near total drop in subway ridership.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>After a few weeks of the declaration of state of emergency, subway usage in the city reached its lowest point, almost 90% less than the same time period the year before. Since then, the number of people that use the subway has remained drastically low. Even after the city began its re-opening scheme on June 8, 2020, subway usage was still more than 70% below 2019 levels.</p>" +
  '<div style="max-width:600px; margin-left:auto; margin-right:auto"><iframe title="vimeo-player" src="https://player.vimeo.com/video/529512696" width="600" height="277.5" frameborder="0" allowfullscreen></iframe></div>' +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>This difference, however, varies across the city, with some parts of it seeing a much steeper decline and others witnessing a stronger recovery. Nevertheless, even a year after the pandemic first hit New York City, the number of daily subway commuters remains below 2019 levels.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>That being said, other transportation networks have fared differently. For example, after a similar decline right after the state of emergency was declared, Citibike has seen its number of users reach and even surpass 2019 levels. City buses, on the other hand, also remain underutilized compared to their usage pre-pandemic.</p>";

let divChapter5 =
  "<h3>The South Bronx, as Always</h3>" +
  '<img src="images/Chapter_4_Image.jpg">' +
  '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.</p>";

*/

var config = {
  style: "mapbox://styles/angelinejcq/cl5ie5q1e000a14ny0jtphka7",
  accessToken: "pk.eyJ1IjoiYW5nZWxpbmVqY3EiLCJhIjoiY2wzdTh0MzNyMjlzNzNwbTlrOHZjbnFuZCJ9.MxT1rnnswLTBYgg2y7MB1w",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "baseMap",
      alignment: "center",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-95, 37.7],
        zoom: 3.8,
        zoomSmall: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "2000Summer",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "2022Summer",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "2000Summer",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "2022Summer",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "2000DroughtMap",
      alignment: "center",
      hidden: false,
      chapterDiv: divChapter2,
      location: {
        center: [-95, 37.7],
        zoom: 3.8,
        zoomSmall: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "2000Summer",
          opacity: 1,
          duration: 300,
        },
        {
          layer: "2022Summer",
          opacity: 0,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "2000Summer",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "2022Summer",
          opacity: 1,
          duration: 300,
        },
      ],
    },
    {
      id: "2022Summer",
      alignment: "center",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-95, 37.7],
        zoom: 3.8,
        zoomSmall: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "2000Summer",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "2022Summer",
          opacity: 1,
          duration: 300,
        },
      ],
      onChapterExit: [
        {
          layer: "2000Summer",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "2022Summer",
          opacity: 0.5,
          duration: 300,
        },
      ],
    },
    {
      id: "flytoCA",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-113.210, 36.979],
        zoom: 5.08,
        zoomSmall: 5,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "2000Summer",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "2022Summer",
          opacity: 0.5,
          duration: 300,
        }
      ],
      onChapterExit: [
        {
          layer: "2000Summer",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "2022Summer",
          opacity: 0.5,
          duration: 300,
        }
      ],
    },
    {
      id: "toFresno",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-118.455, 36.737],
        zoom: 6.8,
        zoomSmall: 6,
        pitch: 40,
        bearing: -7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "2000Summer",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "2022Summer",
          opacity: 0.5,
          duration: 300,
        }
      ],
      onChapterExit: [
        {
          layer: "2000Summer",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "2022Summer",
          opacity: 0.5,
          duration: 300,
        }
      ],
    },
  ],
};