import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const Profile = (props) => {
  const ProfileCard = withStyles({
    root: {
      width: '40%',
      padding: '1em',
      margin: 'auto',
      marginRight: '2em',
      marginTop: '2em',
      display: 'inline-block',
      height: '25em'
    }
  })(Card)
  
  return(
    <ProfileCard>
      <img width='200px' height='200px' src={props.source} alt={props.altText}/>
      <h4>{props.teamMember}</h4>
      <p>{props.title}</p>
      <p>{props.quote}</p>
    </ProfileCard>
  )
}

export default Profile
