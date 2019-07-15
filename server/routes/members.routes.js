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
        Member.create(newMember)
          .then(createdMember => {
            console.log('He creado un miembro ' + createdMember)
            res.json(newMember)
          })
          .catch(err => console.log('Error:', err))
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


      if (true) {
        Member.deleteMany()
          .then(x => {

            const nextIncorporation = {
              age: 18,
              image: "http://www.fotodelucia.com/preciosa.jpg",
              name: "Lucía Astray",
              bio: "Lucía es nuestra último fichaje en la empresa",
            }
            Member.create(nextIncorporation)

            for (let i = 0; i < 10; i++) {
              axios.get(`http://work.mediasmart.io/?page=${i}&page_size=1`, { headers: { 'Authorization': 'mediasmart2019', 'Content-Type': 'application/json' } })
                .then(member => {
                  const newMember = { age, image, name, bio } = member.data[0]
                  newMember.teamId = member.data[0].id
                  if (newMember.image.includes('http')
                    && newMember.bio[0] !== "0"
                    && newMember.name[0] !== "0"
                    && newMember.age > 20
                    && newMember.age < 60) {
                    Member.create(newMember)
                      .then(x => console.log('Creando miembros...'))
                  }
                })
            }
          })
      }

      res.json(allMembers)




      // Member.deleteMany()
      //   .then(x => {


      //     savedMembers = savedMembers.filter(eachMember => 
      //     Member.insertMany(savedMembers)
      //       .then(createdMembers => {
      //         console.log("He creado " + createdMembers.length + "nuevos miembros")




      //         return createdMembers
      //       })
      //   })
    })








})






//                       // Member.find()
//                       // Member.deleteMany()
//                       //   .then(foundMembers => {
//                       //     foundMembers = foundMembers.filter(eachMember => eachMember.image.includes('http')
//                       //       && eachMember.bio[0] !== "0"
//                       //       && eachMember.name[0] !== "0"
//                       //       && eachMember.age > 18
//                       //       && eachMember.age < 67)
//                       //       .then(x => {
//                       //         Member.insertMany(foundMembers)
//                       //           .then(createdMembers => savedMembers = createdMembers)
//                       //           .catch(err => console.log('Error:', err))
//                       //       })
//                       //       .catch(err => console.log('Error:', err))
//                       //   })
//                       console.log(apiUpdate > lastUpdate)
//                     })
//                     .catch(err => console.log('Error:', err))
//                 })
//             }
//           })
//           .catch(err => console.log('Error:', err))
//       }

//       console.log("Returning without updating")
//       res.json(savedMembers)
//         .catch(err => console.log('Error:', err))
//     }
//     )

// })

// router.get('/memberList', (req, res) => {
//   // console.log('entro en el back')
//   Member.find()
//     .then(allMembers => res.json(allMembers))
//     .catch(err => console.log('Error:', err))
// })





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


// router.get('/tales-viewer/:_id', (req, res) => {
//   const id = req.params._id

//   Book.findById(id)
//     .then(data => {
//       console.log(data)
//       return res.json(data)
//     })
//     .catch(err => console.log('Error:', err))
// })
