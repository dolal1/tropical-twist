const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");

// prettier-ignore
const stripe = require("stripe")("sk_test_51HT2vmH3QpMNxKLRvDh3lxJi06SMVh6ZSMlJWk5uUBYWtf7LqbHPSBILyYo2U1bjhoajUflksLJb8NdTZSZeNlWJ008Tfspd4v");

// API

// - APP Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get("/", (req, res) => res.status(200).send("Yoo, Palm Tiger"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Received BOOM!!! for the amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //In Subunits of the currency
    currency: "usd",
  });

  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen Command
exports.api = functions.https.onRequest(app);
