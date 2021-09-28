# gb-search

Google Search API will return a new query of books and store this query in a database.  If the query is repeated, it will pull the query from the database.

## .env file

In the root folder, add a .env and set YOUR_API_KEY_HERE to your api key.  See .env_sample

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
