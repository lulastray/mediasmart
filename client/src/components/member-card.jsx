import React from 'react'
import { Link } from 'react-router-dom'

const MembersCard = theMember => {

  return (
    <div className="card mb-3 col-lg-3 col-md-4 col-sm-6">

      <div>
        <img src={theMember.image} className="card-img" alt={theMember.name} />
      </div>

      <div>
        <div className="card-body">
          <h5 className="card-title">{theMember.name}</h5>
          <p className="card-text">{theMember.age} years old</p>
          <Link className="btn btn-sm btn-outline-dark" to={`/memberDetail/${theMember._id}`}> Ver detalles </Link>

        </div>
      </div>

    </div>

  )
}

export default MembersCard







