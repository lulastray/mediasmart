import axios from 'axios'

export default class services {

  constructor() {

    this.service = axios.create({
      baseURL: 'http://localhost:5000'
    })
  }

  getAllMembers = () => {
    // console.log('entro en services')
    return this.service.get('/memberList')
      .then(allMembers => {
        // console.log('respuesta del back a services', allMembers.data)
        return allMembers.data
      })
  }


  getOneMember = id => {
    return this.service.get(`/memberDetail/${id}`)
      .then(oneMember => {
        console.log('entro en services')
        console.log(id)
        return oneMember.data
      })
      .catch(err => console.log('Error:', err))
  }
}

