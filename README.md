# Climate Change News API 🌍

This is a Node.js and Express-based API that aggregates the latest news articles related to climate change from multiple reputable newspapers. The API uses Cheerio for web scraping and Axios for fetching data, providing an easy way to access and filter climate-related news.

## Features
* Fetches climate change articles from multiple leading newspapers.
* Supports two endpoints:
* `/news`: Retrieve a collection of all articles across all newspapers.
* `/news/:newspaperName`: Fetch climate-related articles from a specific newspaper.
* Dynamically scrapes data in real-time from trusted sources.
* Customizable: Add new newspapers by updating the `newspapers` array in the source code.
  
## Teck Stack
* **Node.js**: Backend runtime environment.
* **Express.js**: Framework for creating RESTful APIs.
* **Axios**: For making HTTP requests to news websites.
* **Cheerio**: For parsing and extracting data from HTML pages.
* **dotenv**: For managing environment variables.