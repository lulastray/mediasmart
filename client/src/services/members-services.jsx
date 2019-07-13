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










// import axios from 'axios'

// export default class services {

//   constructor() {

//     this.service = axios.create({
//       baseURL: 'http://localhost:3000/api/'
//     })
//   }

//   getAllCoasters = () => {

//     return this.service.get('getAllCoasters', { withCredentials: true })
//       .then(res => res.data)
//       .catch(err => console.log('Error', err))
//   }


//   getOneCoaster = id => {
//     return this.service.get(`getOneCoaster/${id}`, { withCredentials: true })
//       .then(res => res.data)
//       .catch(err => console.log('Error', err))
//   }

//   postCoaster = coaster => {
//     return this.service.post('newCoaster', coaster, { withCredentials: true })
//       .then(res => res.data)
//       .catch(err => console.log(err))
//   }

//   handleUpload = theFile => {
//     return this.service.post('/upload', theFile, { withCredentials: true })
//       .then(res => res.data)
//       .catch(err => console.log(err));
//   }
// }