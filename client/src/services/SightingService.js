const baseURL = 'http://localhost:3000/api/sightings/'

export default {
  getSightings(){
    return fetch(baseURL)
    .then(res => res.json())
  },
postSightings(payload){
  return fetch(baseURL, {
    method:'POST',
    body: JSON.stringify(payload),
    heading: {'Content-Type': 'application/json'}
  })
    .then(res => res.json())
  }
}
