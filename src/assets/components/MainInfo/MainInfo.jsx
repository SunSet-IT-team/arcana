import Link from '../../components/Link/Link';
import './styles.scss';

function MainInfo() {
    return (
        <section className="info info_main">
            <div className="container">
                <div className="info__wrapper">
                    <h1 className="info__title title-1">
                        РАССЧИТАЙ СВОЮ АРХЕТИПИЧЕСКУЮ КАРТУ И УЗНАЙ СВОИ
                        АРХЕТИПЫ
                    </h1>

                    <p className="info__text">
                        Архетипическая карта раскрывает внутренние силы, которые
                        направляют твои выборы, реакции и моменты кризиса. Она
                        показывает переживания, которые ты склонен привлекать, и
                        контекст, в котором ты движешься. Это точный инструмент,
                        помогающий распознать повторяющиеся механизмы, ещё не
                        активированные ресурсы и точку, в которой ты находишься
                        на своём пути.
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
