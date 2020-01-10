import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 904cf4a2706b956a01564f133e2f28d3d9f4748564cc950890a17391ef3554b9'
  }
});