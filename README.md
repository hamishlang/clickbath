# Github Pages Parcel example with environment variables

This is a simple app with CRUD functionality. A prerequisite is you set up a new firebase firestore and set the required env vars. 

To run this locally, you'll want to create a new file called `.env.local` with the following values: 
```
API_KEY='YOUR_API_KEY'
AUTH_DOMAIN='YOUR AUTH DOMAIN'
PROJECT_ID='YOUR PROJECT ID'
STORAGE_BUCKET='YOUR STORAGE BUCKET'
MESSAGING_SENDER_ID='YOUR MESSAGEING SENDER ID'
APP_ID='YOUR APP ID'
```

Then `yarn start` to run!

# Changes to package.json depending on where you want to push

Below is what the `scripts` property should look like in `package.json`.
## Heroku w/Parcel

```json
{
  "start": "parcel src/index.html",
  "build": "parcel build src/index.html"
}
```

If you have the the heroku CLI you can type `heroku create`.

Then, when it comes time to deploy:
```sh
git add -A
git commit -m 'latest release'
git push heroku master
```

## Github Pages w/ Parcel

Bundled projects must first build to a `docs` directory.

```json
{
  "start": "parcel src/index.html --out-dir docs",
  "build": "parcel build src/index.html --out-dir docs --public-url ./",
}
```

Then, when it comes time to deploy:
```sh
git add -A
git commit -m 'latest release'
git push origin master
```
