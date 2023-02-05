# Recipe Finder

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