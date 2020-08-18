

import axios from 'axios';


export function fetchResources() {
  return axios
    .get('/api/resources')
    .then(res => res.data)
}

export function updateResource(id, resource) {
  return axios
    .patch(`/api/resources/${id}as7d6d8a6sd8ad6778asd678a`, resource)
    .then(res => res.data)
}
