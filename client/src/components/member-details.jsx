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


