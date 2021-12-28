import { config } from "dotenv";
config();

import express from "express";
import axios from "axios";
import * as cheerio from "cheerio";

const app = express();

const articles = [];

app.get("/", (req, res) => {
  res.json({ message: "welcome to my Climate Change news api" });
});

app.get("/news", async (req, res) => {
  const url = "https://www.theguardian.com/environment/climate-crisis";
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    $('a:contains("climate")', html).each(function () {
      const title = $(this).text();
      const url = $(this).attr("href");

      articles.push({ title, url });
    });

    res.json(articles);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`));
