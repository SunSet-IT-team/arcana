import React from 'react'

import BuyForm from './../BuyForm/BuyForm'
import ContactForm from './../ContactForm/ContactForm'
import Privacy from './../Privacy/Privacy'
import ProfileMethod from './../ProfileMethod/ProfileMethod'

const Popups = () => {
	return (
		<>
			<Privacy></Privacy>
			<ContactForm></ContactForm>
			<BuyForm></BuyForm>
			<ProfileMethod></ProfileMethod>
		</>
	)
}

export default Popups
