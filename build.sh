#!/bin/bash

echo Fetching data from CMS to generate static bundle...

PYTHON_CODE=$(cat <<END
import os
import sys
import json
import urllib.request

with open('./src/build.js', 'w') as file:
    # Add images to /public directory
    response = json.load(sys.stdin)
    if not os.path.exists('./public/storage/uploads/'):
        os.makedirs('./public/storage/uploads/')
    for recipe in response['data']:
        pictureURL = 'http://quinnvissak.test:8080' + recipe['image']['data']['url']
        filename = recipe['image']['data']['url']
        urllib.request.urlretrieve(pictureURL, './public' + filename)

    # Write json response to build.js file
    responseString = str(response)
    replacements = { ': None' : ': null', ': True' : ': true', ': False' : ': false' }
    for word in replacements.keys():
        responseString = responseString.replace(word, replacements[word])
    file.write("export const recipes = " + responseString)
END
)

curl -s http://quinnvissak.test:8080/api/1.1/tables/recipes/rows | \
    python3 -c "$PYTHON_CODE"
