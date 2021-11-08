const express = require("express");
const cors = require("cors");
let eventList = [];
let evtCount = 0;

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

// Request for random compliment
app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // Choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

// Request for random fortune
app.get("/api/fortune", (req, res) => {
  const fortunes = ["A pleasant surprise is waiting for you.",
					 "All your hard work will soon pay off.",
					 "Everywhere you choose to go, friendly faces will greet you.",
           "From now on your kindness will lead you to success.",
           "New ideas could be profitable."
  ];

  // Choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

// Request for motivational quote
app.get("/api/motivation", (req, res) => {
  const quotes = ["Make each day your masterpiece.",
					 "Congratulations! You are on your way.",
					 "Pick battles big enough to matter, small enough to win.",
           "Miles are covered one step at a time.",
           "Success is a journey, not a destination."
  ];

  // Choose a random quote
  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[randomIndex];

  res.status(200).send(randomQuote);
});

// Post calendar events
app.post("/api/events/", (req, res) => {
  let {evtName, evtDay, evtTime} = req.body;
  let newEvt = {
    id: evtCount + 1,
    day: evtDay,
    name: evtName,
    time: evtTime,
    status: "unchecked"
  };
  evtCount++;
  eventList.push(newEvt);
  res.status(200).send(eventList);
});

// Delete calendar events
app.delete('/api/events/:id', (req, res) => {
  const eventIdx = eventList.findIndex((evt) => {
    return evt.id === +req.params.id;
  });
  eventList.splice(eventIdx, 1);
  res.status(200).send(eventList);
});

// Mark event complete
app.put('/api/events/:id', (req, res) => {
  const eventIdx = eventList.findIndex((evt) => {
    return evt.id === +req.params.id;
  });
  eventList[eventIdx].status = "checked";
  res.status(200).send(eventList);
});

app.listen(4000, () => console.log("Server running on 4000"));
