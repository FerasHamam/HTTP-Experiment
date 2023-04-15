<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">HTTP/1.1 VS HTTP/2(SPDY)</h3>
</p>

<!-- ABOUT THE EXPERIMENT -->
## About The Experiment
1. I partitioned an 8k image into 12 x 12 parts to conduct this experiment.

2. Basically HTTP/1.1 loads resources one after the other, so if one resource cannot be loaded, it blocks all the other resources behind it. In contrast, HTTP/2 is able to use a single TCP connection to send multiple streams of data at once so that no one resource blocks any other resource.

3. HTTP/1.1 supports parallel TCP connections, which enables multiple HTTP requests to be sent concurrently. As a result, you may see different parts of the image loading simultaneously. However, establishing a TCP connection comes at a cost, and it can result in overhead.

4. To load the image parts, I used the 'Fast 3G' connection option on Chrome browser developer tools.

5. Both HTTP/1.1 & HTTP/2 servers use SSL to encrypt requests and responses


<!-- GETTING STARTED -->
## Getting Started

### Installation

Installation guides for each project are available in their respective readme files.

### Experiment

<iframe src="https://drive.google.com/file/d/1sZk52zgOZKt8bZAq_lz_9yuycbYgQ4sy/preview" width="640" height="480" allow="autoplay"></iframe>
