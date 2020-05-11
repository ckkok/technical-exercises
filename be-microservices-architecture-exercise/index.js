const express = require('express');
const cron = require('cron').CronJob;
const app = express();

const PORT = 5000;
const CONCURRENCY = 10;

const normal = () => {
  let u = Math.random(), v = Math.random();
  while(u === 0) u = Math.random();
  while(v === 0) v = Math.random();
  return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
}

const clampToZero = val => val > 0 ? val : 0;

let i = 0;

const logRequestCount = () => {
  console.log('Requests being processed:', i);
}

const raw = {
  "oil": {
    "price": 40,
    "available-volume": 9000
  },
  "gas": {
    "price": 2.95,
    "available-volume": 500
  },
  "coffee": {
    "price": 1.02,
    "available-volume": 250
  }
}

const data = () => ({
  "oil": {
    "price": `USD${raw["oil"]["price"]} per barrel`,
    "available-volume": `${raw["oil"]["available-volume"]} barrels`
  },
  "gas": {
    "price": `USD${raw["gas"]["price"]} per TJ`,
    "available-volume": `${raw["gas"]["available-volume"]} TJ`
  },
  "coffee": {
    "price": `USD${raw["coffee"]["price"]} per kg`,
    "available-volume": `${raw["coffee"]["available-volume"]} kg`
  }
})

new cron('0 * * * * *', () => {
  raw["oil"]["price"] = clampToZero(parseFloat((raw["oil"]["price"] + (normal() * 1.3)).toFixed(2)));
  raw["oil"]["available-volume"] = clampToZero(parseFloat((raw["oil"]["available-volume"] + (normal() * 43)).toFixed(2)));
  raw["gas"]["price"] = clampToZero(parseFloat((raw["gas"]["price"] + (normal() * 0.03)).toFixed(2)));
  raw["gas"]["available-volume"] = clampToZero(parseFloat((raw["gas"]["available-volume"] + (normal() * 29)).toFixed(2)));
  raw["coffee"]["price"] = clampToZero(parseFloat((raw["coffee"]["price"] + (normal() * 0.02)).toFixed(2)));
  raw["coffee"]["available-volume"] = clampToZero(parseFloat((raw["coffee"]["available-volume"] + (normal() * 17)).toFixed(2)));
  console.log("Updated prices:", raw);
}).start();

const delay = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms > 0 ? ms : 0);
  });
}

const jitter = ms => {
  return Math.floor((Math.random() - 0.5) * ms);
}

app.get('/oil', async (req, res) => {
  if (i >= CONCURRENCY) {
    res.status(500).send("Server busy");
    return;
  }
  ++i;
  logRequestCount();
  await delay(5500 + jitter(1000));
  res.json(data()["oil"]);
  --i;
  logRequestCount();
}).get('/gas', async (req, res) => {
  if (i >= CONCURRENCY) {
    res.status(500).send("Server busy");
    return;
  }
  ++i;
  logRequestCount();
  await delay(1000 + jitter(300));
  res.json(data()["gas"]);
  --i;
  logRequestCount();
}).get('/coffee', async (req, res) => {
  if (i >= CONCURRENCY) {
    res.status(500).send("Server busy");
    return;
  }
  ++i;
  logRequestCount();
  await delay(500 + jitter(1000));
  res.json(data()["coffee"]);
  --i;
  logRequestCount();
}).get('*', (req, res) => {
  res.status(404).end();
})

app.listen(PORT, () => console.log(`Mock server available at http://localhost:${PORT}`));
