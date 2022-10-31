## Description
- 'Exponential' is a custom search engine built using [Google Search API](https://developers.google.com/custom-search/v1/using_rest) that allows users access to a selective query of information related to their input.

## Installation

- Install Python 3 and pip (from [here](https://www.python.org/downloads/) and [here](https://pip.pypa.io/en/stable/installing/) if needed)
- Install Node.js and npm (from [here](https://nodejs.org/en/download/) if needed)
- Install [virtualenv](https://virtualenv.pypa.io/en/stable/installation/)
- Clone this repo and change directory to the project root
- Create a virtual environment `.venv` (using `python -m virtualenv .venv`)
- Activate the `.venv` virtual environment using `source .venv/bin/activate`
- Run `pip install -r requirements.txt`
- Run `npm install`

## Generating the custom Api Key
- After installing the requirements, go to: `https://developers.google.com/custom-search/v1/overview` and select the `get a key` button
- Select: `Create a new project` from the drop down and hit `next`
- Select `show key` and copy the api key from the browser
- Now in the root project directory, create a file named `.env`
- copy and paste this into the directory, along with your api key: 
 ```shell 
 GOOGLE_API_KEY= ``
 SEARCH_ENGINE_ID=``
 ``` 

## Create Custom Search Engine ID
- To generate a unique search engine id, go to `https://programmablesearchengine.google.com/controlpanel/all` and select `Add`
- Name the engine `Exponential` and select, `Entire Web`
- Hit `Create`
- Copy and paste the id into the `.env` file in the `SEARCH_ENGINE_ID` variable created above.
 

## Running the app
- At the project root, make sure you've activated the `.venv` virtual environment
- Run `npm run start:front-end` in one terminal window - this runs [Parcel](https://parceljs.org/) 
- The front-end app should now load on http://127.0.0.1:3000
- In a second terminal window, run `npm run start:back-end` 
- The Django app will load on http://127.0.0.1:8000 

## Nagivation 
- To enter a search, enter words into the input bar at the top. 
- Hit `Search` to see results
- Hit the magnifying glass on the left to clear search results 
- Scroll through tab to see all results 
- Returns up to 20 results at a time (due to api restrictions)