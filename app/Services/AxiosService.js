// @ts-ignore
export const dndApi = axios.create({
  baseURL: 'https://www.dnd5eapi.co/api/spells',
  timeout: 10000
})

// @ts-ignore
export const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/classroom/spells',
  timeout: 10000
})