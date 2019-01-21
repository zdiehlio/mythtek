import React, { Component } from 'react'
import Zach from '../assets/profile-zach.png'
import Brittany from '../assets/profile-brittany.png'
import Caleb from '../assets/profile-caleb.png'
import Mei from '../assets/profile-mei.png'
import Profile from '../components/Profile';
import Card from '../components/Card'
import Develop from '../assets/icon-develop.svg'
import Design from '../assets/icon-design.svg'
import Market from '../assets/icon-market.svg'
import FRightOne from '../assets/flourish-right-1.png'
import FRightTwo from '../assets/flourish-right-2.png'
import FLeftOne from '../assets/flourish-left-1.png'
import FlourishBot from '../assets/flourish-bottom-1.svg'

import './Home.css'

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
				<section>
					<span className='circle2' />
					<span className='circle3' />	
					<h1>Who We Are</h1>
					<span className='circle1' />
					<p>A creative team of designers, developers, and digital marketers dedicated to creating <span className='special'>products with a purpose</span> that will improve the experience of being human.  We believe in technology that creates as much value for the user as it does for the company.  Our team members are dedicated to creating solutions that will make an impact on individuals, communities, and organizations around the world.</p>
				</section>
				<img className='flourish-right1' src={FRightOne} />
				<section>
					<Card 
						alt='design icon'
						image={Design}
						title='design'
						description='Begin from Scratch and allow our expert designers to take your product from idea to visual gold'
					/>
					<Card
						alt='develop icon'
						image={Develop}
						title='develop'
						description='Once the design is perfect, we give it some teeth so it will perform to your expectations'
					/>
					<Card 
						alt='market icon'
						image={Market}
						title='market'
						description='Our marketers will tell the final story of your product to reach those it will serve best.'
					/>
				</section>
				<img className='flourish-left' src={FLeftOne} />
				<section>
					<Profile 
						source={Zach} 
						altText={'Picture of Developer'} 
						teamMember={'Zachary Diehl'} 
						title={'Slayer of Code'} 
						role={'Development'}
						quote={'"it\'s a miracle our curiosity survives formal education" - Albert Einstein'} 
					/>
					<Profile 
						source={Brittany} 
						altText={'Picture of Project Manager'} 
						teamMember={'Brittany Stubbs'} 
						title={'The reason !%$# get\'s done around here'} 
						role={'Product Owner'}
						quote={'"we all move forward when we recognize how striking and resilient the women around us are" -rupi kaur'} 
					/>
					<Profile 
						source={Mei} 
						altText={'Picture of Marketer'} 
						teamMember={'Mei Miles'} 
						title={'Adventure Liaison'} 
						role={'Marketing'}
						quote={'“If you want to understand the entrepreneur, study the juvenile delinquent. The delinquent is saying with his actions, ‘This sucks. I’m going to do my own thing.” -yvon chouinard'} 
					/>
					<Profile 
						source={Caleb} 
						altText={'Picture of Designer'} 
						teamMember={'Caleb Pase'} 
						title={'Hybrid Designer/Unicorn in Training'} 
						role={'Design'}
						quote={'"What got us here today, won\'t get us there tomorrow" -Marshall Goldsmith'} 
					/>
				</section>
				<img className='flourish-right2' src={FRightTwo} />
				<img src={FlourishBot} />
					{/* <form action= "https://formspree.io/zachary.diehl@gmail.com" method="POST">
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
							{/* <input type="hidden" name="_next" value="./"/> */}
						{/* <Button type='submit'>Send</Button>  */}
						{/* </FormControl> */}
					{/* </form> */} */}
			</main>
		)
	}
}

export default Home
