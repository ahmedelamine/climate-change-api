# Climate Change News API 🌍

This is a **Node.js** and **Express**-based API that aggregates the latest news articles related to climate change from multiple reputable newspapers. The API uses **Cheerio** for web scraping and **Axios** for fetching data, providing an easy way to access and filter climate-related news.

---

## Features

- Fetches climate change articles from multiple leading newspapers.
- Supports two endpoints:
  - `/news`: Retrieve a collection of all articles across all newspapers.
  - `/news/:newspaperName`: Fetch climate-related articles from a specific newspaper.
- Dynamically scrapes data in real-time from trusted sources.
- Customizable: Add new newspapers by updating the `newspapers` array in the source code.

---

## Tech Stack

- **Node.js**: Backend runtime environment.
- **Express.js**: Framework for creating RESTful APIs.
- **Axios**: For making HTTP requests to news websites.
- **Cheerio**: For parsing and extracting data from HTML pages.
- **dotenv**: For managing environment variables.

---

## Endpoints

### Root Endpoint
**`GET /`**  
Returns a welcome message and the available endpoints.  

Response example:
```json
{
  "message": "welcome to my Climate Change news api",
  "endpoints": ["/news", "/news/:newspaperName"]
}
```
### Fetch All Articles
**`GET /news`**  
Returns a list of climate-related articles aggregated from all supported newspapers.

Response example:
```json
[
  {
    "title": "Climate change impact on London",
    "url": "https://www.cityam.com/example-article",
    "source": "cityam"
  },
  {
    "title": "Global warming updates",
    "url": "https://www.nytimes.com/example-article",
    "source": "nyt"
  }
]
```
### Fetch Articles by Newspaper
**`GET /news/:newspaperName`**  
Fetches articles from a specific newspaper. Replace **`:newspaperName`**  with one of the supported newspaper names (e.g., **`cityam`** , **`guardian`** , **`bbc`** ).



Response example:
```json
[
  {
    "title": "Climate Crisis: Solutions and Actions",
    "url": "https://www.theguardian.com/example-article",
    "source": "guardian"
  }
]

```

---

## Supported Newspapers

| Newspaper Name | URL |
|----------------|-----|
| `cityam`       | [City AM](https://www.cityam.com/london-must-become-a-world-leader-on-climate-change-action/) |
| `thetimes`     | [The Times](https://www.thetimes.co.uk/environment/climate-change) |
| `guardian`     | [The Guardian](https://www.theguardian.com/environment/climate-crisis) |
| `telegraph`    | [The Telegraph](https://www.telegraph.co.uk/climate-change) |
| `nyt`          | [New York Times](https://www.nytimes.com/international/section/climate) |
| `latimes`      | [LA Times](https://www.latimes.com/environment) |
| `smh`          | [Sydney Morning Herald](https://www.smh.com.au/environment/climate-change) |
| `bbc`          | [BBC](https://www.bbc.co.uk/news/science_and_environment) |
| `es`           | [Evening Standard](https://www.standard.co.uk/topic/climate-change) |
| `sun`          | [The Sun](https://www.thesun.co.uk/topic/climate-change-environment/) |
| `dm`           | [Daily Mail](https://www.dailymail.co.uk/news/climate_change_global_warming/index.html) |
| `nyp`          | [New York Post](https://nypost.com/tag/climate-change/) |
