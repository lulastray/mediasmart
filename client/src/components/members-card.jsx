import React from 'react'
import { Link } from 'react-router-dom'

const MembersCard = theMember => {

  return (
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src={theMember.image} class="card-img" alt={theMember.name} />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{theMember.name}</h5>
            <p class="card-text">{theMember.age}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default MembersCard







// import React from 'react'
// import { Link } from 'react-router-dom'

// const CoasterCard = theCoaster => {
//   return (
//     <div className="col-lg-3 col-md-4 col-sm-6">
//       <article className="card">
//         <img className="card-img-top" src={theCoaster.imageUrl} alt={theCoaster.title} />
//         <header className="card-body">
//           <h5 className="card-title">{theCoaster.title}</h5>
//           <Link className="btn btn-sm btn-outline-dark" to={`/coasters/${theCoaster._id}`}> Ver detalles </Link>
//         </header>
//       </article>
//     </div>
//   )
// }

// export default CoasterCard