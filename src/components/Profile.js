import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const Profile = (props) => {

  return(
    <div className='profiles'>
      <div className='profile-wrapper'>
      <div className='profile-img'>
        <img src={props.source} alt={props.altText}/>
      </div>
        <div className='profile-content'>
          <p>{props.title}</p>
          <h1>{props.teamMember}</h1>
          <p>{props.quote}</p>
          <p>{props.role}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
