# Recipe Finder


## Main information
- PWA web application
- backend with Rust, PostgreSQL
- frontend JS,webpack,

### development is in the develop branch

## Common instruction (Step 1 for All)
for run project need to install [Docker](https://docs.docker.com/desktop/install/windows-install/) 
and run:
````
docker compose up -d 
````
## FrontEnd instruction (Step 2 only frontEnd)
change directory to frontend and run project:
```
cd frontend
npm run start
```
## Project Structure

```
📦recipe-finder
 ┣ 📂.docker
 ┃ ┗ 📜docker-compose.yaml
 ┣ 📂backend
 ┃ ┣ 📂migrations
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📜main.rs
 ┃ ┃ ┣ 📜postgres.rs
 ┃ ┃ ┗ 📜user.rs
 ┃ ┣ 📂target
 ┃ ┣ 📜.dockerignore
 ┃ ┣ 📜.env
 ┃ ┣ 📜.gitignore
 ┃ ┣ 📜Cargo.lock
 ┃ ┣ 📜Cargo.toml
 ┃ ┣ 📜Dockerfile
 ┃ ┗ 📜readme.md
 ┣ 📂frontend
 ┃ ┣ 📂.nginx
 ┃ ┣ 📂node_modules
 ┃ ┣ 📂src
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📜.dockerignore
 ┃ ┣ 📜Dockerfile
 ┃ ┣ 📜index.html
 ┃ ┣ 📜package-lock.json
 ┃ ┣ 📜package.json
 ┃ ┗ 📜webpack.config.js
 ┣ 📜compose.yaml
 ┗ 📜Readme.md
```
