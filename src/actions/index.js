

import axios from 'axios';


export function fetchResources() {
  return axios
    .get('/api/resources')
    .then(res => res.data)
}
