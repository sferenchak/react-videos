A simple React app to search for and display/play videos using the YouTube API.

[Demo Link v1.0.0](https://sferenchak.github.io/react-videos)

In order to run locally, you'll need a YouTube API key from Google.

You'll also need to create a config.js file at the root of the src directory like so:

```
const config = () => {
	return { YOUTUBE_KEY: 'API_KEY_HERE' };
};
export default config;
```
