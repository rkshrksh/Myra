# Myra

Myra is an interface for the Smart Mirror that I created as a part of my Final year project in my graduation (2017).

## Installation

Clone the repo locally and Use the package manager [npm] to install dependancies.

```bash
npm install
```

### Set API keys in .env file

Add `.env` file in the root Myra directory and set following API KEYS:

```bash
REACT_APP_NEWSAPI_KEY="your_newsapi.org_api_key"
REACT_APP_OPEN_WEATHER_API="your_openweathermap.org_api_key"
GOOGLE_MAPS_KEY="your_google_maps_distance_matrix_api_key"
```

First run this node command, to start the internal distance server:

```bash
node server.js
```

Now in another terminal, To run the whole Application interface:

```bash
npm run start
```

## Usage

I ran this app interface on a Raspberry Pi. After bootup this code used to run on Startup. The interface was setuped to run in full-screen mode. If you need any help in running or understanding the code, feel free to contact me. I will also add more details later on in this repo.

I have not removed many of the API keys from the code. But the API keys are old and expired, so replace them with your own, when using.

The code is very old, so use it at your own risk. :D

## Contributing

I created this in my B.tech final year. So, the code is very old and most of the libraries used are deprecated.

You are welcome to update or contribute.

## License

[MIT](https://choosealicense.com/licenses/mit/)
