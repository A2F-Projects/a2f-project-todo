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

      app.delete(`/cards/delete/:cardId`, async (req, res) => {
        try {
          const cardId = req.params.cardId;
          // Use Mongoose to find and remove the card by its ID
          const deletedCard = await Card.findByIdAndRemove(cardId);
          
          if (!deletedCard) {
            return res.status(404).json({ message: "Card not found" });
          }
          
          return res.json({ message: "Card deleted successfully" });
        } catch (error) {
          return res.status(500).json({ message: "Internal server error" });
        }
      });
      
};
  