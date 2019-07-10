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
          .then(createdMember => console.log('He creado un miembro ' + createdMember))
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
            && eachMember.age > 18
            && eachMember.age < 67)
          Member.insertMany(savedMembers)
            .then(createdMembers => console.log(createdMembers.length))
            .catch(err => console.log('Error:', err))
        })
    })
    .catch(err => ('Error:', err))
})

router.get('/memberList', (req, res) => {
  console.log('entro en el back')
  Member.find()
    .then(allMembers => res.json(allMembers))
    .catch(err => console.log('Error:', err))
})

module.exports = router;

