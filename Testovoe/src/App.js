import './App.css';
import './css/fonts.css';
import React, {useEffect} from 'react'
import {useState} from "react";
import Taxform from './Taxform';

function App() {
    const [windowState, setWindow] = useState(true);
    useEffect(() => {
        document.addEventListener('keyup', (e) => {
            if (e.code == 'Escape') {
                setWindow(true);
            }
        })
        if (windowState) {
            const windowMask = document.querySelector('.start__window');
            windowMask.classList.remove('hide');
        } else {
            const windowMask = document.querySelector('.start__window');
            windowMask.classList.add('hide')
        }
    })
    window.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('App')) {
            setWindow(true);
        }
    })
    useEffect(() => {
        document.querySelector('.start__btn').addEventListener('click', () => {
            setWindow()
        })
    }, []);
    let btns = document.querySelectorAll('.changeBtns');
    btns.forEach(item => item.addEventListener('click', (e) => {
        btns.forEach(item => item.classList.remove('active'));
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    }));
    const [formState, setFormState] = useState(false);
    const [massSumm, setSumm] = useState();
    const valid = () => {
        const userInput = document.querySelector('#userInput');
        const mass = [];
        userInput.classList.remove('error__input');
        document.querySelectorAll('.error__input').forEach(item => item.classList.add('hide'))
        if ((userInput.value > 0) && userInput.value && (Number.isInteger(Number(userInput.value)))) {
            let payPerYear = Number(userInput.value) * 12 * 0.12;
            // if (payPerYear * 4 >= 260000) {
            for (let i = 0; i < Math.trunc(260000 / payPerYear); i++) {
                mass[i] = payPerYear;
            }

            mass.push(260000 - mass.reduce((a, b) => a + b, 0));
            setFormState(true);
            setSumm(mass);
            // } else {
            //
            // }

        } else {
            setFormState(false);
            userInput.classList.add('error__input');
            document.querySelectorAll('.error__input').forEach(item => item.classList.remove('hide'))
        }
        ;
    }
    const hideForm = (prop) => {
        setFormState(prop);
    }
    return (
        <div className="App">
            <div className="start__window">
                <button className="start__btn" onClick={() => {
                    setWindow(false)
                }}>Налоговый вычет
                </button>
            </div>
            <div className="container">
                <header>
                    <h2 className='headerTitle'>Налоговый вычет</h2>
                    <button className="closeForm" onClick={() => {
                        setWindow(true)
                    }
                    }>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.4226 9.00086L17.4771 2.94467C17.6407 2.78667 17.7712 2.59768 17.8609 2.38872C17.9507 2.17976 17.998 1.95502 17.9999 1.72761C18.0019 1.50019 17.9586 1.27466 17.8725 1.06417C17.7863 0.853686 17.6592 0.662457 17.4984 0.501645C17.3375 0.340833 17.1463 0.213657 16.9358 0.12754C16.7253 0.041423 16.4998 -0.0019115 16.2724 6.46674e-05C16.045 0.00204084 15.8202 0.0492885 15.6113 0.139051C15.4023 0.228813 15.2133 0.359291 15.0553 0.522874L8.99914 6.57735L2.94467 0.522874C2.78667 0.359291 2.59768 0.228813 2.38872 0.139051C2.17976 0.0492885 1.95502 0.00204084 1.72761 6.46674e-05C1.50019 -0.0019115 1.27466 0.041423 1.06417 0.12754C0.853686 0.213657 0.662457 0.340833 0.501645 0.501645C0.340833 0.662457 0.213657 0.853686 0.12754 1.06417C0.041423 1.27466 -0.0019115 1.50019 6.46674e-05 1.72761C0.00204084 1.95502 0.0492885 2.17976 0.139051 2.38872C0.228813 2.59768 0.359291 2.78667 0.522874 2.94467L6.57735 8.99914L0.522874 15.0553C0.359291 15.2133 0.228813 15.4023 0.139051 15.6113C0.0492885 15.8202 0.00204084 16.045 6.46674e-05 16.2724C-0.0019115 16.4998 0.041423 16.7253 0.12754 16.9358C0.213657 17.1463 0.340833 17.3375 0.501645 17.4984C0.662457 17.6592 0.853686 17.7863 1.06417 17.8725C1.27466 17.9586 1.50019 18.0019 1.72761 17.9999C1.95502 17.998 2.17976 17.9507 2.38872 17.8609C2.59768 17.7712 2.78667 17.6407 2.94467 17.4771L8.99914 11.4226L15.0553 17.4771C15.2133 17.6407 15.4023 17.7712 15.6113 17.8609C15.8202 17.9507 16.045 17.998 16.2724 17.9999C16.4998 18.0019 16.7253 17.9586 16.9358 17.8725C17.1463 17.7863 17.3375 17.6592 17.4984 17.4984C17.6592 17.3375 17.7863 17.1463 17.8725 16.9358C17.9586 16.7253 18.0019 16.4998 17.9999 16.2724C17.998 16.045 17.9507 15.8202 17.8609 15.6113C17.7712 15.4023 17.6407 15.2133 17.4771 15.0553L11.4226 8.99914V9.00086Z"
                                fill="#EA0029"/>
                        </svg>
                    </button>
                </header>
                <p className="description">Используйте налоговый вычет чтобы погасить ипотеку досрочно. <br/> Размер
                    налогового вычета составляет не более 13% от своего <br/> официального годового дохода. </p>
                <p className="input__title">Ваша зарплата в месяц</p>
                <input type="text" className="input" id='userInput' placeholder='Введите данные'/>
                <div className="error__input hide">Поле обязательно для заполнения</div>
                <button onClick={() => {
                    valid()
                }} className="input__btn">Рассчитать
                </button>
                {formState && <Taxform onCloseForm={setFormState} massive={massSumm}/>}
                <div className="form__selector">
                    <p className="input__title">Что уменьшаем?</p>
                    <div className="">
                        <button className='changeBtns'>Платёж</button>
                        <button className='changeBtns'>Срок</button>
                    </div>
                </div>
                <button onClick={() => {
                    valid()
                }} className="add__btn">Добавить</button>
            </div>
        </div>
    );
}

export default App;
