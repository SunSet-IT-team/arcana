import React from 'react';

import Button from '../../components/Button/Button';
import SelectLabel from '../../components/Select/Select';

const GUI = () => {
    const [selectedDay, setSelectedDay] = React.useState('');
    const [selectedMonth, setSelectedMonth] = React.useState('');
    const [selectedYear, setSelectedYear] = React.useState('');

    let daysInMonth = 31;

    if (
        selectedMonth === 'апрель' ||
        selectedMonth === 'июнь' ||
        selectedMonth === 'сентябрь' ||
        selectedMonth === 'ноябрь'
    ) {
        daysInMonth = 30;
    } else if (selectedMonth === 'февраль') {
        daysInMonth =
            selectedYear % 4 === 0 &&
            (selectedYear % 100 !== 0 || selectedYear % 400 === 0)
                ? 29
                : 28;
    }

    const dateOptions = Array.from({length: daysInMonth}, (_, index) => ({
        value: (index + 1).toString(),
        label: (index + 1).toString(),
    }));
    const monthOptions = [
        {value: 'январь', label: 'Январь'},
        {value: 'февраль', label: 'Февраль'},
        {value: 'март', label: 'Март'},
        {value: 'апрель', label: 'Апрель'},
        {value: 'май', label: 'Май'},
        {value: 'июнь', label: 'Июнь'},
        {value: 'июль', label: 'Июль'},
        {value: 'август', label: 'Август'},
        {value: 'сентябрь', label: 'Сентябрь'},
        {value: 'октябрь', label: 'Октябрь'},
        {value: 'ноябрь', label: 'Ноябрь'},
        {value: 'декабрь', label: 'Декабрь'},
    ];
    const yearOptions = Array.from({length: 61}, (_, index) => {
        const year = 1990 + index;
        return {
            value: year.toString(),
            label: year.toString(),
        };
    });

    const handleDayChange = (selectedDay) => {
        setSelectedDay(selectedDay);
    };

    const handleMonthChange = (selectedMonth) => {
        setSelectedMonth(selectedMonth);
        if (selectedDay && daysInMonth < parseInt(selectedDay)) {
            setSelectedDay('');
        } else {
            const newDaysInMonth = calculateDaysInMonth(
                selectedMonth,
                selectedYear
            );
            if (selectedDay > newDaysInMonth) {
                setSelectedDay('');
            }
        }
    };
    const handleYearChange = (selectedYear) => {
        setSelectedYear(selectedYear);
        if (selectedDay && daysInMonth < parseInt(selectedDay)) {
            setSelectedDay('');
        } else {
            const newDaysInMonth = calculateDaysInMonth(
                selectedMonth,
                selectedYear
            );
            if (selectedDay > newDaysInMonth) {
                setSelectedDay('');
            }
        }
    };

    const calculateDaysInMonth = (month, year) => {
        switch (month) {
            case 'январь':
            case 'март':
            case 'май':
            case 'июль':
            case 'август':
            case 'октябрь':
            case 'декабрь':
                return 31;
            case 'апрель':
            case 'июнь':
            case 'сентябрь':
            case 'ноябрь':
                return 30;
            case 'февраль':
                return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
                    ? 29
                    : 28;
            default:
                return 31;
        }
    };

    return (
        <div className="GUI">
            <div className="container">
                {/* КНОПКИ */}
                <div className="GUI__col">
                    <div className="GUI__col">
                        <Button text="кнопка"></Button>
                    </div>
                    <div className="GUI__col">
                        <Button
                            text="кнопка"
                            className="button--black"
                        ></Button>
                    </div>
                </div>

                {/* СЕЛЕКТЫ */}
                <div className="GUI__col">
                    <div className="GUI__col">
                        <SelectLabel
                            options={dateOptions}
                            placeholder="селект 1"
                            onChange={handleDayChange}
                            value={selectedDay}
                        />
                    </div>
                </div>

                <div className="GUI__col">
                    <div className="GUI__col">
                        <SelectLabel
                            options={monthOptions}
                            placeholder="селект 2"
                            onChange={handleMonthChange}
                            value={selectedMonth}
                        />
                    </div>
                </div>

                <div className="GUI__col">
                    <div className="GUI__col">
                        <SelectLabel
                            options={yearOptions}
                            placeholder="селект 3"
                            onChange={handleYearChange}
                            value={selectedYear}
                        />
                    </div>
                </div>

                {/* <header className="menu-header">
          <div className="logo">Taimoor Shahzada</div>
          <div className="menu-open"></div>
        </header>

        <div className="menu-container">
          <div className="menu-close"></div>
          <div className="menu-items">
            <div className="menu-items-container">
              <span>
                <div className="menu-item">
                  <div className="menu-item-number">01</div>
                  <div className="menu-item-name">Home</div>
                  <div className="menu-item-sub">123123123</div>
                  <div className="menu-item-icon">
                    <ion-icon name="arrow-up-outline"></ion-icon>
                  </div>
                </div>
              </span>
              <div className="line"></div>
              <span>
                <div className="menu-item">
                  <div className="menu-item-number">01</div>
                  <div className="menu-item-name">Home</div>
                  <div className="menu-item-sub">123123123</div>
                  <div className="menu-item-icon">
                    <ion-icon name="arrow-up-outline"></ion-icon>
                  </div>
                </div>
              </span>
              <div className="line"></div>
              <span>
                <div className="menu-item">
                  <div className="menu-item-number">01</div>
                  <div className="menu-item-name">Home</div>
                  <div className="menu-item-sub">123123123</div>
                  <div className="menu-item-icon">
                    <ion-icon name="arrow-up-outline"></ion-icon>
                  </div>
                </div>
              </span>
              <div className="line"></div>
              <span>
                <div className="menu-item">
                  <div className="menu-item-number">01</div>
                  <div className="menu-item-name">Home</div>
                  <div className="menu-item-sub">123123123</div>
                  <div className="menu-item-icon">
                    <ion-icon name="arrow-up-outline"></ion-icon>
                  </div>
                </div>
              </span>
              <div className="line"></div>
            </div>
          </div>
        </div>

        <div className="bg-image">
          <div className="image"></div>
          <p>i vibe different</p>
        </div>

        <div className="container">
          <h1>DRIPP.</h1>
        </div> */}
            </div>
        </div>
    );
};

export default GUI;
