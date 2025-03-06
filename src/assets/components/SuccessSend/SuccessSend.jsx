import {Link} from 'react-router-dom';
import './styles.scss';

function SuccessSend() {
    return (
        <section className="success-send">
            <div className="container">
                <div className="success-send__wrapper">
                    <Link
                        to="/"
                        className="success-send__back-link back-arrow"
                        href="#"
                    >
                        <svg
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21 0H0V1H19.29L0 20.29V21H0.71L1 20.71L1.71 20L20 1.71V21H21V0Z"
                                fill="currentColor"
                            />
                        </svg>
                        <span className="underline">Torna indietro</span>
                    </Link>

                    <h1 className="success-send__title title-1">
                        Grazie per la tua richiesta!
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default SuccessSend;
