import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const Profile = (props) => {
  
  return(
    <div className='profiles'>
      <img width='200px' height='200px' src={props.source} alt={props.altText}/>
      <div className='profile-body'>
        <p>{props.title}</p>
        <h1>{props.teamMember}</h1>
        <p>{props.quote}</p>
        <div className='tag'><p>{props.role}</p></div>  
      </div>
    </div>
  )
}

export default Profile
