// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.getElementById("hamburger_button");
  const navMenu = document.getElementById("nav_bar");

  hamburgerMenu.addEventListener("click", function () {
    // alert("hamburger menu button pushed");
    navMenu.classList.toggle("show");
  });
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Ogden Utah",
    location: "Ogden, Utah",
    dedicated: "1972, January 18",
    area: 112232,
    imageUrl: "images/ogden_utah_temple.JPG",
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893, April 6",
    area: 382207,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg",
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October 27",
    area: 53997,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  function createTempleCard(temple) {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    const name = document.createElement("h2");
    name.textContent = temple.templeName;
    card.appendChild(name);

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;
    card.appendChild(location);

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    card.appendChild(dedicated);

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area}`;
    card.appendChild(area);

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} Temple`;
    image.loading = "lazy"; // Enable native lazy loading
    image.width = 400;
    card.appendChild(image);

    return card;
  }

  function displayTemples(temples) {
    const container = document.getElementById("temple_pics");
    container.innerHTML = "";
    temples.forEach((temple) => {
      const card = createTempleCard(temple);
      container.appendChild(card);
    });
  }
  function filterOld(temples, year) {
    return temples.filter((temple) => {
      const dedicatedYear = new Date(temple.dedicated).getFullYear();
      return dedicatedYear < year;
    });
  }
  function filterNew(temples, year) {
    return temples.filter((temple) => {
      const dedicatedYear = new Date(temple.dedicated).getFullYear();
      return dedicatedYear > year;
    });
  }
  function filterLarge(temples, size) {
    return temples.filter((temple) => {
      return temple.area > size;
    });
  }
  function filterSmall(temples, size) {
    return temples.filter((temple) => {
      return temple.area < size;
    });
  }

  displayTemples(temples);

  document.getElementById("showAll").addEventListener("click", function () {
    displayTemples(temples);
  });

  document.getElementById("old").addEventListener("click", function () {
    const filteredTemples = filterOld(temples, 1900);
    displayTemples(filteredTemples);
  });

  document.getElementById("new").addEventListener("click", function () {
    const filteredTemples = filterNew(temples, 2000);
    displayTemples(filteredTemples);
  });

  document.getElementById("large").addEventListener("click", function () {
    const filteredTemples = filterLarge(temples, 90000);
    displayTemples(filteredTemples);
  });

  document.getElementById("small").addEventListener("click", function () {
    const filteredTemples = filterSmall(temples, 10000);
    displayTemples(filteredTemples);
  });

  document.getElementById("showAll1").addEventListener("click", function () {
    displayTemples(temples);
  });

  document.getElementById("old1").addEventListener("click", function () {
    const filteredTemples = filterOld(temples, 1900);
    displayTemples(filteredTemples);
  });

  document.getElementById("new1").addEventListener("click", function () {
    const filteredTemples = filterNew(temples, 2000);
    displayTemples(filteredTemples);
  });

  document.getElementById("large1").addEventListener("click", function () {
    const filteredTemples = filterLarge(temples, 90000);
    displayTemples(filteredTemples);
  });

  document.getElementById("small1").addEventListener("click", function () {
    const filteredTemples = filterSmall(temples, 10000);
    displayTemples(filteredTemples);
  });
});
