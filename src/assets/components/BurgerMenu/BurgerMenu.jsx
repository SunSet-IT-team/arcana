import React from 'react'

import './styles.scss'

import { Link, useLocation } from 'react-router-dom'

import gsap from 'gsap'
import BurgerMenuList from '../BurgerMenuList/BurgerMenuList'

function BurgerMenu({ tl }) {
	const location = useLocation()

	React.useEffect(() => {
		console.log('reset')

		tl.current = gsap.timeline({ paused: true })

		tl.current.fromTo('.burger-menu', { y: '-100%' }, { y: '0', duration: 0.5 })

		tl.current.fromTo(
			'.burger-menu__nav',
			{ x: '-100%' },
			{ x: '0', duration: 1 }
		)

		tl.current.fromTo(
			'.burger-menu .menu-list__list',
			{ x: '-100%', opacity: 0 },
			{ x: '0', opacity: 1, duration: 1 },
			'-=0.5'
		)

		tl.current.fromTo(
			'.burger-menu .menu-list__link-wrapper',
			{ x: '-100%', opacity: 0 },
			{ x: '0', opacity: 1, duration: 1, stagger: { amount: 0.5 } },
			'-=1'
		)

		tl.current.fromTo(
			'.burger-menu .menu-list__link-span',
			{ y: 100 },
			{ y: 0, duration: 0.5, stagger: { amount: 0.5 } }
		)

		tl.current.fromTo(
			'.burger-menu .menu-list__link-svg',
			{ y: 100 },
			{ y: 0, duration: 0.5, stagger: { amount: 0.5 } },
			'-=1'
		)

		tl.current.fromTo(
			['.burger-menu__logo', '.burger-menu__close'],
			{ opacity: 0 },
			{ opacity: 1, duration: 1 },
			'-=1'
		)
	}, [location.pathname])

	function menuClose() {
		if (tl.current) {
			tl.current.reverse()

			setTimeout(() => {
				document.body.classList.remove('menu-open')
			}, 2500)
		}
	}

	return (
		<div className='burger-menu'>
			<nav className='burger-menu__nav'>
				<div className='container'>
					<div className='burger-menu__top'>
						<Link
							className='burger-menu__logo'
							to='/'
							onClick={() => menuClose()}
						>
							<img src='/images/icons/logo-black.svg' alt='logo' />
						</Link>

						<div className='burger-menu__close'>
							<button className='close-button' onClick={() => menuClose()}>
								<div className='in'>
									<div className='close-button-block'></div>
									<div className='close-button-block'></div>
								</div>
								<div className='out'>
									<div className='close-button-block'></div>
									<div className='close-button-block'></div>
								</div>
							</button>
						</div>
					</div>
					<div className='burger-menu__content'>
						<BurgerMenuList menuClose={menuClose}></BurgerMenuList>
					</div>
				</div>
			</nav>
		</div>
	)
}

export default BurgerMenu
