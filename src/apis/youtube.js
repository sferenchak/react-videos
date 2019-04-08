import axios from 'axios';

const KEY = 'AIzaSyD_31t6H75uXFGYYqCFd8v5SbPJLhu25uA';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
