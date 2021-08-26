Problem Statement :

Use the Hacker News API available at https://github.com/HackerNews/API to build the API backend for a mobile client. The client needs the following endpoints to render its UI: /top-stories — returns the top 10 stories ranked by score in the last 10 minutes (see instructions). Each story will have the title, url, score, time of submission, and the user who submitted it.

Instructions :

To prevent overloading the HN APIs — and from getting your server rate-limited and blocked by Firebase — implement appropriate caching so that all clients connecting to your server will see the same cached data for up to 10 minutes.