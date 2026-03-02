import Link from '../../components/Link/Link';
import './styles.scss';

function MainInfo() {
    return (
        <section className="info info_main">
            <div className="container">
                <div className="info__wrapper">
                    <h1 className="info__title title-1">
                        РАССЧИТАЙТЕ СВОЮ АРХЕТИПИЧЕСКУЮ КАРТУ И ИССЛЕДУЙТЕ СВОИ
                        ВЕДУЩИЕ АРХЕТИПЫ
                    </h1>

                    <p className="info__text">
                        Архетипическая карта отражает внутренние настройки,
                        которые влияют на ваш выбор, реакции и поведение в
                        кризисных ситуациях. Она раскрывает психологический
                        контекст, в котором разворачивается ваш жизненный путь.
                        Помогает понять повторяющиеся механизмы – архетипические
                        паттерны, и работать с ними. А также показывает, где вы
                        находитесь на пути своего психологического взросления.
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
