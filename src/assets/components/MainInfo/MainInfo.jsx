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
                        La Mappa Archetipica Natale rivela le energie
                        archetipiche intrinseche alla nostra psiche che
                        influenzano le esperienze che attraiamo e l’ambiente che
                        ci circonda. È una rappresentazione simbolica del
                        viaggio della nostra anima, che mostra i modelli
                        archetipici personali attraverso i quali percorriamo il
                        cammino dell’individuazione.
                    </p>

                    {/* <p className="info__text">
                        Non siamo nati come fogli bianchi, ma già predisposti a
                        vivere{' '}
                        <b className="info__b">
                            {' '}
                            determinati ruoli, esperienze, battaglie
                        </b>{' '}
                        e <b className="info__b">trasformazioni</b>. Il Profilo
                        Archetipico è uno <b className="info__b">strumento</b>{' '}
                        che ci aiuta a comprendere{' '}
                        <b className="info__b">chi siamo</b>, quali{' '}
                        <b className="info__b">sfide</b>
                        incontriamo e come{' '}
                        <b className="info__b">
                            affrontarle in modo consapevole
                        </b>
                        .
                    </p>
                    <p className="info__text">
                        La <b className="info__b">mappa archetipica</b> funziona
                        come una <b className="info__b">bussola</b> che{' '}
                        <b className="info__b">orienta il nostro cammino</b>.
                    </p>
                    <p className="info__text">
                        Attraverso{' '}
                        <b className="info__b">l'analisi archetipica</b>,
                        possiamo comprendere gli{' '}
                        <b className="info__b">eventi che attiriamo</b>, le
                        <b className="info__b">transazioni interiori</b> e le
                        <b className="info__b">
                            dinamiche che si ripetono
                        </b>{' '}
                        nella nostra vita, dai{' '}
                        <b className="info__b">blocchi personali</b> a quelli
                        <b className="info__b">professionali</b>.
                    </p>
                    <p className="info__text">
                        Ci permette di individuare i{' '}
                        <b className="info__b">punti di forza</b>, le{' '}
                        <b className="info__b">risorse nascoste</b>, le{' '}
                        <b className="info__b">influenze esterne</b>, le nostre{' '}
                        <b className="info__b">convinzioni</b> e i{' '}
                        <b className="info__b">comportamenti che ci limitano</b>
                        , aiutandoci a{' '}
                        <b className="info__b">
                            prendere decisioni consapevoli
                        </b>
                        , anche nei
                        <b className="info__b">momenti di crisi</b>.
                    </p>
                    <p className="info__text">
                        Il Profilo Archetipico è uno{' '}
                        <b className="info__b">strumento rapido ed efficace</b>{' '}
                        per{' '}
                        <b className="info__b">
                            superare crisi personali e professionali ,
                            migliorare le relazioni
                        </b>
                        , e <b className="info__b">raggiungere obiettivi</b> con
                        <b className="info__b">determinazione</b>, riscoprendo
                        il <b className="info__b">senso di questo viaggio</b>.
                    </p> */}

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
