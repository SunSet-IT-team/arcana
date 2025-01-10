import gsap from 'gsap'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
	profileMethod,
	setOpenProfileMethod,
} from '../../../redux/slices/profileMethodSlice'
import Button from '../../components/Button/Button'
import { TextLinesReveal } from '../../js/textLinesReveal'

import './styles.scss'

function ProfileMethod() {
	const dispatch = useDispatch()
	const isProfileMethodOpen = useSelector(profileMethod)

	useEffect(() => {
		const textSplitElements = document.querySelectorAll('.text-split')
		const textAnimation = new TextLinesReveal(Array.from(textSplitElements))
	}, [])

	useEffect(() => {
		if (isProfileMethodOpen) {
			const tl = gsap.timeline({ paused: true })

			tl.to('.profile-method', {
				duration: 0.5,
				y: '0',
			})

			tl.to('.profile-method__wrapper', {
				duration: 1,
				x: '0',
			})

			tl.to(['.profile-method__title'], {
				duration: 1,
				stagger: {
					amount: 0.5,
				},
				x: '0',
			})

			tl.to(['.profile-method__text .line', '.profile-method__title .line'], {
				duration: 0.5,
				y: '0',
				rotate: '0',
			})

			tl.to(['.profile-method__logo', '.profile-method__close'], {
				duration: 0.5,
				opacity: 1,
			})

			tl.to(['.profile-method__form-button', '.profile-method__text .line'], {
				duration: 1,
				y: '0',
				autoAlpha: 1,
				rotate: '0',
			})

			tl.play()

			document.body.classList.add('menu-open')

			return () => {
				tl.reverse()
				setTimeout(() => {
					document.body.classList.remove('menu-open')
				}, 2000)
			}
		}
	}, [isProfileMethodOpen])

	return (
		<div className='profile-method'>
			<div className='profile-method__wrapper'>
				<div className='container'>
					<div className='profile-method__top'>
						<Link className='profile-method__logo' to='/'>
							<img src='./images/icons/logo-black.svg' alt='logo' />
						</Link>
						<div className='profile-method__close'>
							<button
								className='close-button'
								onClick={() => dispatch(setOpenProfileMethod(false))}
							>
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
					<div className='profile-method__content'>
						<h2 className='profile-method__title form-title text-split'>
							ARCHETYPAL PSY PROFILE
						</h2>
						<div className='profile-method__text-box'>
							<p className='profile-method__text text-split'>
								Archetypal Psy Profile Method si basa su calcoli matematici che,
								usando gli Archetipi di Tarocchi, insieme costituiscono la mappa
								archetipica, che permette di vedere qualcosa di simile al codice
								genetico con cui una persona viene al mondo. Questo codice
								parlerà del motivo più importante che si ripete per tutta la
								vita, delle predisposizioni e capacità, nonché degli eventi che
								influenzano in modo significativo lo sviluppo della personalità
								della persona, e, ovviamente, tutto questo viene interpretato e
								spiegato attraverso la psicologia. Grazie all'analisi di questo
								codice, possiamo conoscere meglio una persona, spiegare le
								ragioni del suo comportamento, riuscire a capire bene cosa la
								spinge, facilitare il movimento verso il suo scopo in questa
								vita e massimizzare lo sviluppo del suo potenziale.
							</p>
							<p className='profile-method__text text-split'>
								Gli Archetipi esistono in una persona, indipendente dal fatto
								che li studi o meno, esistono al di fuori del tempo e dello
								spazio e vengono trasmessi di generazione in generazione. Il
								Profilo Archetipico, basato sulla mappa archetipica natale,
								calcolata a partire dalla data di nascita, è la più importante
								fonte di informazioni su una persona. Se manca qualcosa nella
								mappa archetipica natale, allora non si manifesterà né anche
								nella persona. Gli Archetipi, che troviamo nella mappa
								archetipica individuale, riflettono le qualità psicologiche
								acquisite su base genetica, che insieme costituiscono le
								caratteristiche qualitative psicologiche, contenenti una
								descrizione della composizione interna individuale di una
								persona e delle sue possibili azioni in determinate circostanze.
							</p>
							<p className='profile-method__text text-split'>
								Ogni Archetipo ha molte sfaccettature ed è la totalità degli
								Archetipi che fornisce un quadro completo delle caratteristiche
								di una persona nel Profilo Archetipico della personalità. E in
								ciascuna posizione della mappa archetipica gli Archetipi hanno
								sfumature diverse.
							</p>
							<p className='profile-method__text text-split'>
								Durante la interpretazione della mappa archetipica, il
								significato di ciascun Archetipo viene considerato in base alla
								sua Posizione, e vengono prese in considerazione anche
								l'influenza e l'interazione degli Archetipi dalle posizioni
								vicine e le loro combinazioni.
							</p>
							<p className='profile-method__text text-split'>
								Possono esserci molte mappe archetipiche uguale, ad esempio, li
								avranno tutte le persone nate nello stesso giorno, anno e mese.
								Ma, indipendentemente da ciò, siamo tutti diversi e la lettura e
								la decodifica del Profilo Archetipico individuale avviene in
								base alle caratteristiche dell'ambiente e di educazione,
								dell'attività umana, degli eventi della vita che hanno
								influenzato il destino e la visione del mondo della persona.
							</p>
							<p className='profile-method__text text-split'>
								Archetypal Psy Profile Method è molto profondo ed è pratico
								grazie alla sua semplicità, accuratezza ed efficacia. È uno
								strumento molto valido nella psicologia pratica, nel lavoro
								degli educatori, allenatori, mentori e di tutti coloro che in un
								modo o nell'altro lavorano con le persone ed i loro problemi.
								Ma, naturalmente, questo è, prima di tutto, uno strumento
								efficace per la conoscenza di sé e la crescita personale, motivo
								per cui è molto richiesto tra tutti coloro che lottano per la
								consapevolezza, lo sviluppo intellettuale e spirituale la
								maturazione psicologica e sociale e anche per
								l'autorealizzazione di successo.
							</p>
							<div className='profile-method__form-bottom'>
								<Button
									text='CONTATTAMI'
									className='profile-method__form-button button--black'
								></Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileMethod
