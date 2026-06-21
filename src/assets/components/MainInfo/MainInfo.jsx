import Link from '../../components/Link/Link';
import './styles.scss';

function MainInfo() {
    return (
        <section className="info info_main">
            <div className="container">
                <div className="info__wrapper">
                    <h1 className="info__title title-1">
                        ЗДРАВСТВУЙ, МОЯ ХОРОШАЯ (ИЛИ МОЙ ХОРОШИЙ, ЧТО ЧУТЬ
                        МЕНЕЕ ВЕРОЯТНО)!
                    </h1>

                    <p className="info__text">
                        Если ты здесь, то пришло время узнать себя поближе.
                        Чаще всего людей беспокоят несколько вещей: отношения,
                        деньги или самореализация. Очень много информации
                        хранится в нашей дате рождения. Зачастую происходящее
                        с нами не «судьба», а неправильные паттерны поведения.
                        Что бы ни привело тебя сюда, конкретный запрос или
                        банальное любопытство, я покажу тебе новые грани твоей
                        личности, открывая их слой за слоем. И, возможно, даже
                        помогу найти ответы на некоторые твои вопросы. Если все
                        еще интересно, то погнали...
                    </p>

                    <Link
                        text="НАЧНИ ОТСЮДА"
                        className="info__link link--black"
                        path="calculator"
                    />
                </div>
            </div>
        </section>
    );
}

export default MainInfo;
