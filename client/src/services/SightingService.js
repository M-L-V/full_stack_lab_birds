const baseURL = 'http://localhost:3000/api/sightings/'

export default {
  getSightings(){
    return fetch(baseURL)
    .then(res => res.json())
  },
postSightings(payload){
  console.log("payload", payload);
  return fetch(baseURL, {
    method:'POST',
    body: JSON.stringify(payload),
    headers: {'Content-Type': 'application/json'}
  })
    .then(res => res.json())
  }
}
