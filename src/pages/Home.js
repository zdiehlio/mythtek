import React from 'react'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import Gesture from '@material-ui/icons/Gesture'
import Build from '@material-ui/icons/Build'
import CardGiftcard from '@material-ui/icons/CardGiftcard'
import { withStyles } from '@material-ui/core/styles'
import Woman from '../assets/woman.png'
import Man from '../assets/man.png'
import TextField from '@material-ui/core/TextField'


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

const Home = () => {
	return(
		<main>
			<StyledPaper>
				<h2>Let's Talk</h2>
					<p>This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</p>
			</StyledPaper>
			<StyledPaper>
				<h2>What We Do</h2>
				<StyledCard>
					<Gesture />
					<h4>1. Design</h4>
					<p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
				</StyledCard>
				<StyledCard>
					<Build />
					<h4>2. Develop</h4>
					<p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
				</StyledCard>
				<StyledCard>
					<CardGiftcard />
					<h4>3. Market</h4>
					<p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
				</StyledCard>
			</StyledPaper>
			<StyledPaper>
				<h2>Meet the Team</h2>
				<ProfileCard>
					<img src={Man} alt='silouhette of man'/>
					<h6>Zachary Diehl</h6>
					<p>Founder</p>
					<p>Full Stack Developer and Technical Director</p>
				</ProfileCard>
				<ProfileCard>
					<img src={Woman} alt='silouhette of Woman'/>
					<h6>Some Girl</h6>
					<p>Marketing Director</p>
					<p>Marketing Ninja</p>
				</ProfileCard>
				<ProfileCard>
					<img src={Woman} alt='silouhette of Woman'/>
					<h6>Some Girl</h6>
					<p>Web Designer</p>
					<p>Visual Wizard</p>
				</ProfileCard>
				<ProfileCard>
					<img src={Man} alt='silouhette of Man'/>
					<h6>Some Guy</h6>
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
			</form>
		</main>
	)
}

export default Home
