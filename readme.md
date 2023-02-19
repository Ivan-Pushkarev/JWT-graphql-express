##  Initial SetUp

#### Clone from repository

Follow https://github.com/vbogutskii-sh/certServer.git project.
Click on Clone or download button and copy the path.
In Webstorm create a new project from Version Control:  `File -> New -> Project from Version Control...`   
Paste the path into URL field.
Chose directory for your project. Create a `certServer` folder in the list of your WebStorm projects, if needed. ALERT! Make sure you remember that directory, we will have to find it later.
Click Clone button.

Note! Recommended Node version: not later than 16 (ex. 16.17.0)

#### Local Install

Run `npm install`.

Check if you have locally installed `npm install -g nodemon` and `mongodb`.

For MacOS users, it is highly recommended to install docker.

#### Docker

Install docker from https://www.docker.com/products/docker-desktop.

To create mongo container, run `docker run -d -p 27017:27017 --name mongo mongo:latest` in your terminal.

Start your container:
In Docker Desktop hit the 'start' button (that looks like 'play' button) located under 'Actions' .
Make sure your mongo container is running, the icon should turn green.

#### MongoCompass
Compass is a graphical interface that enables you to manage your Mongo Database locally.
Local connection url is  `mongodb://localhost:27017`

Now you server is ready to start.

Run `npm run dev` command. It starts the server locally with connection to local MongoDB.

