import { useInView } from 'react-intersection-observer'
import WaterWave from 'react-water-wave'
const WaterEffectWrapper = ({ children }) => {
	const { ref, inView } = useInView({ threshold: 0 })
	return (
		<WaterWave resolution={256} dropRadius={20} perturbance={0.04}>
			{methods => {
				if (!inView) {
					methods.hide()
				} else {
					methods.show()
				}
				return <div ref={ref}>{children}</div>
			}}
		</WaterWave>
	)
}
export default WaterEffectWrapper
