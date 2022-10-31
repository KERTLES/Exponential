from django.http import JsonResponse
from django.shortcuts import render
import requests
import os
from dotenv import load_dotenv
import json

load_dotenv()


def greeting(request):
    return JsonResponse({"hi": 5, "you": "good to go!"})


def search(request):

    # Please refer to the instructions at https://developers.google.com/custom-search/v1/using_rest
    # for creating a custom search engine, and getting an API key

    # ****Super important note***:
    # Do not commit either your custom search engine ID or the api key to the repo!! =)

    url = 'https://www.googleapis.com/customsearch/v1?'
    # api_key = os.environ.get('GOOGLE_API_KEY')
    api_key = os.environ['GOOGLE_API_KEY']
    # print(api_key)

    custom_search_engine_id = os.environ['SEARCH_ENGINE_ID']

    content = json.loads(request.body)


    search_parameter = content['q']
    print(search_parameter)

    num = 0
    results = []

    while num < 20:
        response = requests.get('{}key={}&cx={}&q={}&start={}'.format(
            url, api_key, custom_search_engine_id, search_parameter, num))
        num += 10
        if response.status_code == 200:
            response = response.json()
            for item in response['items']:
                results.append(item)
        else:
            print("error")
            return JsonResponse({"error ":response.status_code})
        
    return JsonResponse({"results": results})
