<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">NodeJS HTTP/2</h3>
</p>

<!-- ABOUT -->
## About

### Built With

* [NodeJS](https://nodejs.org/en)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [OpenSSL](https://www.openssl.org/)


<!-- GETTING STARTED -->
## Getting Started

### Installation

1. generate self-signed SSL certificate

   ```sh
   openssl req -x509 -newkey rsa:4096 -keyout server.key -out server.crt -sha256 -days 365
   ```
2. Install packages
   ```sh
   npm install
   ```
3. Run the server
   ```sh
   npm start
   ```
