const express = require("express");
const cors = require("cors");
const evtList = [];

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
					 "Congratulations! You are on your way.",
           "Imagination rules the world.",
           "Pick battles big enough to matter, small enough to win."
  ];

  // Choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
  
});

// Post calendar events
app.post("/api/events/", (req, res) => {
  let {evtName, evtDay, evtTime} = req.body;
  let newEvt = {
    id: evtList.length + 1,
    day: evtDay,
    name: evtName,
    time: evtTime
  };
  evtList.push(newEvt);
  res.status(200).send(newEvt);
});






app.listen(4000, () => console.log("Server running on 4000"));
