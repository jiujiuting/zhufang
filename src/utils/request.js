import axios from 'axios'
const basis = axios.create({
  baseURL: 'http://liufusong.top:8080'
})
export default basis
