import React from 'react'
import { Link } from 'react-router-dom'

const MembersCard = theMember => {

  return (


    <div className="card mb-3 col-lg-3 col-md-4 col-sm-6">

      <div className="first-row-card">
        <div className="img-box">
          <img src={theMember.image} className="member-img" alt={theMember.name} />
        </div>
        <div className="member-name">
          <div>
            <h5>{theMember.name}</h5>
          </div>
        </div>
      </div>
      <div className="card-bottom">
        <p className="card-text">{theMember.age} years old</p>

        <Link className="btn btn-sm btn-outline-dark" to={`/memberDetail/${theMember._id}`}> Ver detalles </Link>
      </div>

    </div>

  )
}

export default MembersCard







