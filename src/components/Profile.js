import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const Profile = (props) => {
  
  return(
    <div>
      <img width='200px' height='200px' src={props.source} alt={props.altText}/>
      <h4>{props.teamMember}</h4>
      <p>{props.title}</p>
      <p>{props.role}</p>
      <p>{props.quote}</p>
    </div>
  )
}

export default Profile
