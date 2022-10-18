fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.full})`;
    document.getElementById("author").textContent = `By: ${data.user.name}`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = url(
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQ5OTI0NTE&ixlib=rb-1.2.1&q=80&w=1080"
    );
    document.getElementById("author").textContent = `By: Dodi Achmad`;
  });
fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    return res.json();
  })
  .then((data) => {
    document.getElementById("crypto-top").innerHTML = `
    <img src="${data.image.small}" alt="">
    <span>${data.name}</span>
 
    `;
    document.getElementById("crypto").innerHTML += `
    <p>Current: ${data.market_data.current_price.inr}</p>
    <p>High/24h: ${data.market_data.high_24h.inr}</p>
    <p>Low/24h: ${data.market_data.low_24h.inr}</p>
    `;
  })
  .catch((err) => {
    console.error(err);
  });

function getCurrentTime() {
  const date = new Date();
  document.getElementById("time").textContent = date.toLocaleTimeString(
    "en-us",
    { timeStyle: "short" }
  );
}
setInterval(getCurrentTime, 1000);

navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${34.0328448}&lon=${74.8158976}&units=metric`
  )
    .then((res) => {
      if (!res) {
        throw Error("Weather data not availabe");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById("weather").innerHTML = `
      <img src=${iconUrl} />
      <p class="temp">${data.main.temp}°C</p>
      <p class="weather-city">${data.name}</p>
      `;
    })
    .catch((err) => {
      console.error(err);
    });
});
// latitude
// :
// 34.0328448
// longitude
// :
// 74.8158976
