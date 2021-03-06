# Snippet Using cURL, to be used on a Debian/Ubuntu Linux device.

sudo apt-get install jq -y

curl localhost:8000 -H "Accept: application/json" -o data.json

cat data.json | jq '.data | sort_by(.id)' >> data.json

cat data.json

rm -f data.json