import React, { Component } from 'react'
import MemberServices from '../services/members-services'
import MembersCard from './member-card'

class MemberList extends Component {

  constructor(props) {
    super(props)

    this.state = {
      members: [],
      loading: false
    }
    this.services = new MemberServices()


  }

  componentDidMount() {
    this.setState({
      ...this.state,
      loading: true
    })
    // console.log('voy a services')
    this.services.getAllMembers()
      .then(allMembers => {
        // console.log('respuesta de services al front', allMembers)
        this.setState({
          ...this.state,
          members: allMembers,
          loading: false
        })
      })
  }

  render() {

    return (
      <div className="wrapper">
        {
          this.state.loading ?
            <div className="loader-icon"><i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>

              <p className="apartForm">updating...</p></div> :

            <div className="row no-gutters">
              {this.state.members.map((theMember, idx) => <MembersCard key={idx} {...theMember} />)}
            </div>

        }
      </div>

    )
  }
}

export default MemberList
