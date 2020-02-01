document.querySelector(".musichero").style.backgroundImage =
  "url('../assets/images/sketch-4748895_1920.jpg')";
document.querySelector(".musichero__albumname").innerText =
  "Music To Be Murdered By - Eminem";
document.querySelector(".musichero__songname").innerText = "Lock It Up";

// // first show
// document.querySelector(".shows__content--date1").innerText = "Date";
// document.querySelector(".shows__content--date--context1").innerText =
//   "Mon Dec 17 2018";
// document.querySelectorAll(".shows__content--venue1").innerText = "Venue";
// document.querySelectorAll(".shows__content--venue--context1").innerText =
//   "Ronald Lanee";
// document.querySelectorAll(".shows__content--location1").innerText = "Location";
// document.querySelectorAll(".shows__content--location--context1").innerText =
//   "San Fancisco, CA";

/**
 * This function will generate values for the <h2>s: 'Date', 'Venue', 'Location'
 * Each property 'Date': smth, 'Venue': smth, 'Location': smth. Will have an individual <div>
 * this function will be a loop that adds value to each individual property
 * then it will add class name to individual elements
 */

// createElement("h3");
// createTextNode("Date")
// createElement("p")
// createTextNode("")

// createElement("h3");
// createTextNode("Venue")
// createElement("p")
// createTextNode("")

// createElement("h3");
// createTextNode("Location")
// createElement("p")
// createTextNode("")

// let show1 = ["Mon Dec 17 2018", "Ronald Lanee", "San Fancisco, CA"];
// let show2 = ["Tue Jul 18 2019", "Pier 3 East", "San Fancisco, CA"];
// let show3 = ["Fri Jul 22 2019", "View Loungue", "San Fancisco, CA"];
// let show4 = ["Sat Aug 12 2019", "Hyatt Agency", "San Fancisco, CA"];
// let show5 = ["Fri Sep 05 2019", "Moscow Center", "San Fancisco, CA"];
// let show6 = ["Wed Aug 11 2019", "Pres Club", "San Fancisco, CA"];

let showInfo = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Fancisco, CA"
  },
  {
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Fancisco, CA"
  },
  {
    date: "Fri Jul 22 2019",
    venue: "View Loungu",
    location: "San Fancisco, CA"
  },
  {
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Fancisco, CA"
  },
  {
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Fancisco, CA"
  },
  { date: "Wed Aug 11 2019", venue: "Pres Club", location: "San Fancisco, CA" }
];

function generateShowList(showInfoObj) {
  console.log(showInfoObj.date);
  let shows = document.querySelector(".shows");

  let showsEl = document.createElement("div");
  showsEl.classList.add("shows__content");

  let h3Date = document.createElement("h3");
  h3Date.classList.add("shows__content--date");
  h3Date.innerText = "DATE";
  let pDate = document.createElement("p");
  pDate.classList.add("shows__content--date--context");
  pDate.innerText = showInfoObj.date;
  let h3Venue = document.createElement("h3");
  h3Venue.classList.add("shows__content--venue");
  h3Venue.innerText = "VENUE";
  let pVenue = document.createElement("p");
  pVenue.classList.add("shows__content--venue--context");
  pVenue.innerText = showInfoObj.venue;
  let h3Location = document.createElement("h3");
  h3Location.classList.add("shows__content--location");
  h3Location.innerText = "LOCATION";
  let pLocation = document.createElement("p");
  pLocation.classList.add("shows__content--location--context");
  pLocation.innerText = showInfoObj.location;
  let showButton = document.createElement("button");
  showButton.classList.add("shows__content--button");
  showButton.innerText = "But Tickets";

  showsEl.appendChild(h3Date);
  showsEl.appendChild(pDate);
  showsEl.appendChild(h3Venue);
  showsEl.appendChild(pVenue);
  showsEl.appendChild(h3Location);
  showsEl.appendChild(pLocation);
  showsEl.appendChild(showButton);
  shows.appendChild(showsEl);
}
for (let i = 0; i < showInfo.length; i++) {
  generateShowList(showInfo[i]);
}

// function showList(list, sh) {
//   for (let i = 0; i <= 2; i++) {
//     {
//       let h2Date = document.createElement("h3").createTextNode("Date");
//       {
//         let pDate = document.createElement("p").createTextNode(dateVariable[0]);
//       }
//       {
//         let h2Venue = document.createElement("h3").createTextNode("Venue");
//       }
//       {
//         let pVenue = document
//           .createElement("p")
//           .createTextNode(venueVariable[0]);
//       }
//       {
//         let h2Location = document.createElement("h3").createTextNode("Venue");
//       }
//       {
//         let pLocation = document
//           .createElement("p")
//           .createTextNode(locationVariable[0]);
//       }
//     }
//   }
// }

// function showListDate(h3Date, Date) {
//   let h3Date = document.createElement("h3");
//   h3Date.classList.add("shows__content--date");
//   let Date = document.createTextNode("Date");
//   h3Date.appendChild(Date);
// }

// let showList1 = showList(show1);
