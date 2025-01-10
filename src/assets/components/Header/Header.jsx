import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setOpenContactForm } from '../../../redux/slices/contactFormSlice'

import BurgerMenu from '../../components/BurgerMenu/BurgerMenu'
import './styles.scss'

function Header() {
	const dispatch = useDispatch()
	const tl = useRef(null)
	const [isHidden, setIsHidden] = useState(false)
	const lastScrollTop = useRef(0)

	function menuOpen() {
		if (tl.current) {
			tl.current.play()
			document.body.classList.add('menu-open')
		}
	}

	useEffect(() => {
		const handleScroll = () => {
			const currentScroll =
				window.pageYOffset || document.documentElement.scrollTop

			if (currentScroll > lastScrollTop.current) {
				setIsHidden(true)
			} else {
				setIsHidden(false)
			}

			lastScrollTop.current = currentScroll <= 0 ? 0 : currentScroll
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])
	return (
		<header className={`header ${isHidden ? 'header--hidden' : ''}`}>
			<BurgerMenu tl={tl}></BurgerMenu>

			<div className='container'>
				<div className='header__wrapper'>
					<Link className='header__logo' to='/'>
						<img src='/images/icons/logo.svg' alt='logo' />
					</Link>
					<button
						className='header__link underline'
						onClick={() => dispatch(setOpenContactForm(true))}
					>
						Contatti
					</button>
					<button className='header__button' onClick={() => menuOpen()}>
						<span className='header__button-span'></span>
						<span className='header__button-span'></span>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
