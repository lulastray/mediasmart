const express = require('express');
const router = express.Router();
const axios = require('axios')
const Member = require('../models/Member.model')

router.get('/updateMembers', (req, res, next) => {


  for (let i = 0; i < 1000; i++) {
    axios.get(`http://work.mediasmart.io/?page=${i}&page_size=1`, { headers: { 'Authorization': 'mediasmart2019', 'Content-Type': 'application/json' } })
      .then(members => {

        const newMember = { age, image, name, bio } = members.data[0]
        newMember.teamId = members.data[0].id

        if (newMember.image.includes('http') && newMember.bio[0] !== "0" && newMember.name[0] !== "0") {


          Member.create(newMember)
            .then(createdMember => {
              console.log('He creado un miembro ' + createdMember)
              res.json(newMember)
            })
            .catch(err => console.log('Error:', err))
        }
      })
      .catch(err => console.log('Error:', err))

  }


});

router.get('/filteredMembers', (req, res) => {
  let savedMembers

  Member.find()
    .then(members => {
      savedMembers = [...members]
      Member.deleteMany()
        .then(x => {
          savedMembers = savedMembers.filter(eachMember => eachMember.image.includes('http')
            && eachMember.bio[0] !== "0"
            && eachMember.name[0] !== "0"
            && eachMember.age > 20
            && eachMember.age < 60)
          Member.insertMany(savedMembers)
            .then(createdMembers => {
              console.log(createdMembers.length)
              res.json(createdMembers)
            })
            .catch(err => console.log('Error:', err))
        })
    })
    .catch(err => ('Error:', err))
})

router.get('/memberList', (req, res) => {

  Member.find()
    .then(allMembers => {

      let savedMembers = [...allMembers]

      const now = new Date()
      const updated = new Date(savedMembers[0].updatedAt)
      const lastUpdate = updated.getTime()
      const apiUpdate = now.setHours(3, 0, 0)


      if (apiUpdate > lastUpdate) {
        Member.deleteMany()
          .then(x => {

            const nextIncorporation = {
              age: 18,
              image: "https://res.cloudinary.com/lulas/image/upload/v1563177652/lucia-astray-component_ztrlsa.jpg",
              name: "Lucía Astray",
              bio: "Lucía es nuestro último fichaje en el equipo. Viene del sector audiovisual, en concreto de la edición y la postproducción. Esta experiencia le aporta un gran valor ya que no solo ha aprendido a adaptarse a los distintos proyectos, programas y equipos sino, también, a buscarse las castañas ella solita.Su creatividad y su curiosidad le llevo a investigar otras disciplinas y ahí descubrió y se sumergió de lleno en el desarrollo web. A nosotros nos encanta su pasión por la vida y por el trabajo bien hecho, además de su sonrisa que denota un sentido del humor.",
            }
            Member.create(nextIncorporation)

            let usersCreated = new Promise((resolve, reject) => {
              let counter = 0


              for (let i = 0; i < 1000; i++) {
                axios.get(`http://work.mediasmart.io/?page=${i}&page_size=1`, { headers: { 'Authorization': 'mediasmart2019', 'Content-Type': 'application/json' } })
                  .then(member => {
                    const newMember = { age, image, name, bio } = member.data[0]
                    newMember.teamId = member.data[0].id
                    if (newMember.image.toString().includes('http')
                      && typeof newMember.bio !== "number"
                      && typeof newMember.name !== "number"
                      && newMember.bio[0] !== "0"
                      && newMember.name[0] !== "0"
                      && newMember.age > 20
                      && newMember.age < 60) {
                      Member.create(newMember)
                        .then(createdMember => {
                          createdMembers++
                          console.log("Se ha creado un miembro y ya van " + counter + ". Este se creó " + createdMember.name)
                        })
                        .catch(err => {
                          counter++
                          console.log("Un miembro no se ha podido crear por el error " + err + " y ya van " + counter)
                        })
                    } else {
                      counter++
                      console.log("Se ha filtrado un miembro y ya van " + counter + ". Este se filtró ")
                      console.log(newMember.name)
                    }
                    if (counter == 1000) {
                      console.log("Debería retornar")
                      resolve("Base de datos actualizada")
                    }
                  })
                  .catch(err => {
                    counter++
                    console.log("La llamada a la API ha fallado " + err)
                  })
              }
            })

            usersCreated
              .then(response => {
                console.log("HA RETORNADO")
                console.log(response)
                Member.find()
                  .then(allMembers => res.json(allMembers))
              })
              .catch(err => {
                console.log(err)
                res.json(savedMembers)
              })

          })
      } else {
        res.json(allMembers)

      }

    })
})















router.get('/memberDetail/:_id', (req, res) => {
  const id = req.params._id
  Member.findById(id)
    .then(oneMember => {
      console.log('entro en el back detalles')
      console.log(oneMember)
      return res.json(oneMember)
    })
    .catch(err => console.log('Error', err))

})





module.exports = router;


