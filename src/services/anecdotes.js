import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async text => {
  const object = { content: text, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const vote = async id => {
  const url = `${baseUrl}/${id}`
  const object = (await axios.get(url)).data
  console.log('VOTE', object, url)
  const response = await axios.put(
    url,
    { ...object, votes: object.votes + 1 }
  )
  return response.data
}

export default {
  getAll,
  createNew,
  vote,
}