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
import Zach from '../assets/zach.jpg'
import Brittany from '../assets/brittany.jpg'
import Caleb from '../assets/caleb.jpg'
import Mei from '../assets/mei.JPG'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { FormControl, InputLabel, Button } from '@material-ui/core';
import Profile from '../components/Profile';


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
					<Profile 
						source={Zach} 
						altText={'Picture of Developer'} 
						teamMember={'Zachary Diehl'} 
						title={'Slayer of Code'} 
						quote={'"it\'s a miracle our curiosity survives formal education" - Albert Einstein'} 
					/>
					<Profile 
						source={Brittany} 
						altText={'Picture of Project Manager'} 
						teamMember={'Brittany Stubs'} 
						title={'The reason !%$# get\'s done around here'} 
						quote={'"we all move forward when we recognize how striking and resilient the women around us are" -rupi kaur'} 
					/>
					<Profile 
						source={Mei} 
						altText={'Picture of Marketer'} 
						teamMember={'Mei Miles'} 
						title={'Adventure Liaison'} 
						quote={'“If you want to understand the entrepreneur, study the juvenile delinquent. The delinquent is saying with his actions, ‘This sucks. I’m going to do my own thing.” -yvon chouinard'} 
					/>
					<Profile 
						source={Caleb} 
						altText={'Picture of Designer'} 
						teamMember={'Caleb Pase'} 
						title={'Hybrid Designer/Unicorn in Training'} 
						quote={'"What got us here today, won\'t get us there tomorrow" -Marshall Goldsmith'} 
					/>
				</StyledPaper>
				<form action= "https://formspree.io/zachary.diehl@gmail.com" method="POST">
					<h2>Work with us</h2>
					<StyledInput 
						label='Name'
						margin='normal'
						name='message'
					/>
					<StyledInput 
						label='Email'
						margin='normal'
						name='email'
					/>
					<StyledInput 
						label='Company'
						margin='normal'
						name='message'
					/>
					<TextField
						label='Message'
						margin='normal'
						name='message'
						multiline
						fullWidth
					/>
					{/* <FormControl> */}
						{/* <StyledInput 
							select
							label='product'
							name='message' 
							style={{width:'200px'}}
							value={this.state.product}
							margin='normal'
							onChange={this.handleChange}
						>
							<MenuItem value='none'><em>None</em></MenuItem>
							<MenuItem value='mobile_app'>Mobile App</MenuItem>
							<MenuItem value='web_app'>Web App</MenuItem>
							<MenuItem value='other'>Other</MenuItem>
						</StyledInput>*/}
					<Button type='submit'>Send</Button> 
					{/* </FormControl> */}
				</form>
			</main>
		)
	}
}

export default Home
