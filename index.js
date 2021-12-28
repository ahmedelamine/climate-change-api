import { config } from "dotenv";
config();

import express from "express";
import axios from "axios";
import cheerio from "cheerio";

const app = express();

app.get("/", (req,res) => {
    res.json({message: "welcome to my Climate Change news api"})
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`))