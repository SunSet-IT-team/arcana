import Link from '../../components/Link/Link';
import './styles.scss';

function MainInfo() {
    return (
        <section className="info info_main">
            <div className="container">
                <div className="info__wrapper">
                    <h1 className="info__title title-1">
                        CALCOLA LA TUA MAPPA ARCHETIPICA E SCOPRI I TUOI
                        ARCHETIPI
                    </h1>

                    <p className="info__text">
                        La mappa archetipica rivela le forze interiori che
                        guidano le tue scelte, le tue reazioni e i momenti di
                        crisi. Mostra le esperienze che tendi ad attrarre e il
                        contesto in cui ti muovi. È uno strumento preciso per
                        riconoscere i meccanismi ricorrenti, le risorse ancora
                        inattive e il punto esatto in cui ti trovi nel tuo
                        percorso.
                    </p>

                    <Link
                        text="CALCOLARE"
                        className="info__link link--black"
                        path="calculator"
                    />
                </div>
            </div>
        </section>
    );
}

export default MainInfo;
