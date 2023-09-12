const mongoose = require("mongoose");
const Card = mongoose.model("cards");

module.exports = (app) => {
    // Route definitions go here...
    app.get(`/cards/get`, async (req, res) => {
        try {
          const cards = await Card.find({});
          return res.send(cards);
        } catch (error) {
          return res.send(error);
        }
    });

    app.post(`/cards/post`, async (req, res) => {
        try {
          const cardPosted = new Card({
            title: req.body.title,
            desc: req.body.desc,
            date: req.body.date,
          });
          await cardPosted.save();
          console.log("posting a new quote:", cardPosted);
          return res.send(cardPosted);
        } catch (error) {
          console.log("hey there's an err", error);
          return res.send(error);
        }
      });
      
};
  