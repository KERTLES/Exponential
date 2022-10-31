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

## Running the app

- At the project root, make sure you've activated the `.venv` virtual environment
- Run `npm run start:front-end` in one terminal window - this runs [Parcel](https://parceljs.org/) 
- The front-end app should now load on http://127.0.0.1:3000
- In a second terminal window, run `npm run start:back-end` 
- The Django app will load on http://127.0.0.1:8000 



