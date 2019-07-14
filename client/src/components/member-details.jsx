import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MemberService from '../services/members-services'

class MemberDetails extends Component {

  constructor(props) {
    super(props)

    this.state = { member: {} }
    this.services = new MemberService()

  }

  componentDidMount() {
    console.log('voy a service')
    this.services.getOneMember(this.props.match.params.id)
      .then(theMember => {

        console.log(theMember)
        return this.setState({ member: theMember })
      })

  }

  render() {
    return (

      // <div className="card detail mb-3 col-lg-3 col-md-4 col-sm-6">

      //   <div>
      //     <img src={this.state.member.image} className="card-img detail" alt={this.state.member.name} />
      //   </div>

      //   <div>
      //     <div className="card-body detail">
      //       <h5 className="card-title detail">Name: {this.state.member.name}</h5>
      //       <p className="card-text detail">Years: {this.state.member.age}</p>
      //       <h5>Bio:</h5>
      //       <p className="card-bio detail">{this.state.member.bio}</p>
      //       <Link to={'/memberList'} className="btn btn-outline-dark">Volver</Link>

      //     </div>
      //   </div>

      // </div>

      <div className="container member-detail">
        <div className="first-row">

          <img className="img-detail" src={this.state.member.image} alt={this.state.member.name}></img>

          <div className="first-row-text">
            <h5 className="name-detail">Name: </h5>
            <p> {this.state.member.name}</p>
            <div>
              <h5 className="age-detail">Age: </h5>
              <p> {this.state.member.age}</p>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="detail-bio">
            <h5>Bio:</h5>
            <p>{this.state.member.bio}</p>

            <Link to={'/memberList'} className="btn btn-outline-dark">Volver</Link>
          </div >
        </div >
      </div >
    )
  }
}

export default MemberDetails


// import React, { Component } from 'react'
// import CoasterService from '../service/coaster-services'

// import { Link } from 'react-router-dom'



// class CoasterDetails extends Component {

//   constructor(props) {
//     super(props)
//     this.state = { coaster: {} }
//     this.services = new CoasterService()
//   }


//   componentDidMount() {

//     this.services.getOneCoaster(this.props.match.params.id)
//       .then(theCoaster => this.setState({ coaster: theCoaster }))
//   }

//   render() {
//     return (
//       <div className="container coaster-detail">

//         <h1>{this.state.coaster.title}</h1>

//         <div className="row">

//           <div className="col-md-8">
//             <img src={this.state.coaster.imageUrl} alt={this.state.coaster.title}></img>
//           </div>
//           <div className="col-md-4">
//             <h5>Descripción</h5>
//             <p>{this.state.coaster.description}</p>

//             <h5>Longitud</h5>
//             <p>{this.state.coaster.length}</p>

//             <h5>Inversiones</h5>
//             <p>{this.state.coaster.inversions}</p>

//             <Link to={'/coasters'} className="btn btn-outline-dark">Volver</Link>

//           </div>
//         </div>
//       </div>


//     )
//   }
// }

// export default CoasterDetails