import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import Gesture from '@material-ui/icons/Gesture'
import Build from '@material-ui/icons/Build'
import CardGiftcard from '@material-ui/icons/CardGiftcard'
import { withStyles } from '@material-ui/core/styles'
import Woman from '../assets/woman.png'
import Man from '../assets/man.png'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { FormControl, InputLabel } from '@material-ui/core';


const StyledPaper = withStyles({
	root: {
		padding: '5em 10em',
	}
})(Paper)

const StyledCard = withStyles({
	root: {
		width: '30%',
		margin: 'auto',
		marginRight: '2em',
		display: 'inline-block',
		height: '15em',
		paddingTop: '2em'
	}
})(Card)

const ProfileCard = withStyles({
	root: {
		width: '40%',
		margin: 'auto',
		marginRight: '2em',
		marginTop: '2em',
		display: 'inline-block',
	}
})(Card)

const StyledInput = withStyles({
	root: {
		margin: '2em',
	}
})(TextField)

class Home extends Component {
	state = {
		product: 'none'
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value})
	}
	render() {
		return(
			<main>
				<StyledPaper>
					<h2>Who We Are</h2>
						<p>A team of designers, developers and digital marketers dedicated to creating phenomonal products for our clients and users.  We don't stop at red, we keep turning right until we find a green.</p>
				</StyledPaper>
				<StyledPaper>
					<h2>What We Do</h2>
					<StyledCard>
						<Gesture />
						<h4>1. Design</h4>
						<p>Begin from scratch and allow our expert designers to take your product from idea to visual gold</p>
					</StyledCard>
					<StyledCard>
						<Build />
						<h4>2. Develop</h4>
						<p>Once the design is perfect, we give it some teeth so it will perform to your expectations</p>
					</StyledCard>
					<StyledCard>
						<CardGiftcard />
						<h4>3. Market</h4>
						<p>The products done, but the best is yet to come.  Our marketers will tell the final story of your product to reach those it will serve best.</p>
					</StyledCard>
				</StyledPaper>
				<StyledPaper>
					<h2>Meet the Team</h2>
					<ProfileCard>
						<img src={Man} alt='silouhette of man'/>
						<h4>Zachary Diehl</h4>
						<p>Founder</p>
						<p>Full Stack Developer and Technical Director</p>
					</ProfileCard>
					<ProfileCard>
						<img src={Woman} alt='silouhette of Woman'/>
						<h4>Some Girl</h4>
						<p>Marketing Director</p>
						<p>Marketing Ninja</p>
					</ProfileCard>
					<ProfileCard>
						<img src={Woman} alt='silouhette of Woman'/>
						<h4>Some Girl</h4>
						<p>Web Designer</p>
						<p>Visual Wizard</p>
					</ProfileCard>
					<ProfileCard>
						<img src={Man} alt='silouhette of Man'/>
						<h4>Some Guy</h4>
						<p>BE Developer</p>
						<p>BE magician</p>
					</ProfileCard>
				</StyledPaper>
				<form>
					<h2>Work with us</h2>
					<StyledInput 
						label='Name'
						margin='normal'
					/>
					<StyledInput 
						label='Email'
						margin='normal'
					/>
					<StyledInput 
						label='Company'
						margin='normal'
					/>
					{/* <FormControl> */}
						<StyledInput 
							select
							label='product'
							name='product' 
							style={{width:'200px'}}
							value={this.state.product}
							margin='normal'
							onChange={this.handleChange}
						>
							<MenuItem value='none'><em>None</em></MenuItem>
							<MenuItem value='mobile_app'>Mobile App</MenuItem>
							<MenuItem value='web_app'>Web App</MenuItem>
							<MenuItem value='other'>Other</MenuItem>
						</StyledInput>
					{/* </FormControl> */}
				</form>
			</main>
		)
	}
}

export default Home
