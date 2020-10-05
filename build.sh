#!/bin/bash

echo Fetching data from CMS to generate static bundle...

PYTHON_CODE=$(cat <<END
import os
import sys
import json
import requests
import urllib.request

with open('./src/build.js', 'w') as file:
    # Add images to ./public directory
    response = json.load(sys.stdin)
    if not os.path.exists('./public/storage/uploads/'):
        os.makedirs('./public/storage/uploads/')
    for recipe in response['data']:
        imageId = recipe['image']
        headers = {'Authorization': 'Bearer ' + os.environ['OAUTH_TOKEN']}
        # alternatively use docker ./data volume mapping
        fileObjectResponse = requests.get('http://localhost:8080/_/files/' + str(imageId), headers=headers).json()
        url = fileObjectResponse['data']['data']['full_url']
        urllib.request.urlretrieve(url, './public/storage/uploads/' + fileObjectResponse['data']['filename_disk'])

    # Write json response to build.js file
    responseString = str(response)
    replacements = { ': None' : ': null', ': True' : ': true', ': False' : ': false' }
    for word in replacements.keys():
        responseString = responseString.replace(word, replacements[word])
    file.write("export const recipes = " + responseString)
END
)

export OAUTH_TOKEN=`docker exec -i quinnvissakcom_mysql_1 mysql -B -u directus -pdirectus --disable-column-names --execute "select token from directus.directus_users where first_name = 'Admin';"`
curl -s http://localhost:8080/_/items/recipes | python3 -c "$PYTHON_CODE"
