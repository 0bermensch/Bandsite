document.querySelector(".musichero__albumname").innerText =
  "Music To Be Murdered By";
document.querySelector(".musichero__songname").innerText = "Lock It Up";

axios
  .get(
    "https://project-1-api.herokuapp.com/showdates?api_key=198fdc7d-5eae-467e-a297-33259c534e28"
  )
  .then(response => {
    let showsFromApi = response.data;
    for (let i = 0; i < showsFromApi.length; i++) {
      generateShowList(showsFromApi[i]);
    }
  })
  .catch(function(error) {
    console.log(error);
  });

function generateShowList(showsInfo) {
  let shows = document.querySelector(".shows");

  let showsEl = document.createElement("div");
  showsEl.classList.add("shows__content");

  let h3Date = document.createElement("h3");
  h3Date.classList.add("shows__content--date");
  h3Date.innerText = "DATE";
  let pDate = document.createElement("p");
  pDate.classList.add("shows__content--date--context");
  pDate.innerText = showsInfo.date;
  let h3Venue = document.createElement("h3");
  h3Venue.classList.add("shows__content--venue");
  h3Venue.innerText = "VENUE";
  let pVenue = document.createElement("p");
  pVenue.classList.add("shows__content--venue--context");
  pVenue.innerText = showsInfo.place;
  let h3Location = document.createElement("h3");
  h3Location.classList.add("shows__content--location");
  h3Location.innerText = "LOCATION";
  let pLocation = document.createElement("p");
  pLocation.classList.add("shows__content--location--context");
  pLocation.innerText = showsInfo.location;
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

// let showInfo = [
//   {
//     date: "Mon Dec 17 2018",
//     venue: "Ronald Lane",
//     location: "San Fancisco, CA"
//   },
//   {
//     date: "Tue Jul 18 2019",
//     venue: "Pier 3 East",
//     location: "San Fancisco, CA"
//   },
//   {
//     date: "Fri Jul 22 2019",
//     venue: "View Loungu",
//     location: "San Fancisco, CA"
//   },
//   {
//     date: "Sat Aug 12 2019",
//     venue: "Hyatt Agency",
//     location: "San Fancisco, CA"
//   },
//   {
//     date: "Fri Sep 05 2019",
//     venue: "Moscow Center",
//     location: "San Fancisco, CA"
//   },
//   { date: "Wed Aug 11 2019", venue: "Pres Club", location: "San Fancisco, CA" }
// ];

// function generateShowList(showInfoObj) {
//   console.log(showInfoObj.date);
//   let shows = document.querySelector(".shows");

//   let showsEl = document.createElement("div");
//   showsEl.classList.add("shows__content");

//   let h3Date = document.createElement("h3");
//   h3Date.classList.add("shows__content--date");
//   h3Date.innerText = "DATE";
//   let pDate = document.createElement("p");
//   pDate.classList.add("shows__content--date--context");
//   pDate.innerText = showInfoObj.date;
//   let h3Venue = document.createElement("h3");
//   h3Venue.classList.add("shows__content--venue");
//   h3Venue.innerText = "VENUE";
//   let pVenue = document.createElement("p");
//   pVenue.classList.add("shows__content--venue--context");
//   pVenue.innerText = showInfoObj.venue;
//   let h3Location = document.createElement("h3");
//   h3Location.classList.add("shows__content--location");
//   h3Location.innerText = "LOCATION";
//   let pLocation = document.createElement("p");
//   pLocation.classList.add("shows__content--location--context");
//   pLocation.innerText = showInfoObj.location;
//   let showButton = document.createElement("button");
//   showButton.classList.add("shows__content--button");
//   showButton.innerText = "Buy Tickets";

//   showsEl.appendChild(h3Date);
//   showsEl.appendChild(pDate);
//   showsEl.appendChild(h3Venue);
//   showsEl.appendChild(pVenue);
//   showsEl.appendChild(h3Location);
//   showsEl.appendChild(pLocation);
//   showsEl.appendChild(showButton);
//   shows.appendChild(showsEl);
// }
// for (let i = 0; i < showInfo.length; i++) {
//   generateShowList(showInfo[i]);
// }
