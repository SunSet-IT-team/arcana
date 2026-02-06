import Link from '../../components/Link/Link';
import './styles.scss';

function MainInfo() {
    return (
        <section className="info info_main">
            <div className="container">
                <div className="info__wrapper">
                    <h1 className="info__title title-1">
                        РАССЧИТАЙТЕ СВОЮ АРХЕТИПИЧЕСКУЮ КАРТУ И ИССЛЕДУЙТЕ
                        ДОМИНИРУЮЩИЕ АРХЕТИПЫ
                    </h1>

                    <p className="info__text">
                        Архетипическая карта отражает внутренние силы, которые
                        направляют ваши выборы, реакции и поведение в кризисных
                        ситуациях. Она показывает опыт, который вы склонны
                        привлекать, а также психологический контекст, в котором
                        разворачивается ваш жизненный путь. Это точный
                        инструмент для распознавания повторяющихся механизмов –
                        устойчивых архетипических паттернов, ещё не
                        задействованных ресурсов и того точного места, где вы
                        находитесь на своём пути психологического взросления.
                    </p>

                    <Link
                        text="РАССЧИТАТЬ"
                        className="info__link link--black"
                        path="calculator"
                    />
                </div>
            </div>
        </section>
    );
}

export default MainInfo;
