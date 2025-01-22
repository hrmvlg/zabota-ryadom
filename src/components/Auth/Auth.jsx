import { useState } from "react";
import eyeIconUrl from '../../assets/Images/Icons/eye-icon.svg';


export default function Auth() {

    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className="auth">
            <div className="auth__section">
                <h1 className="auth__title">Авторизация</h1>
                <form className="auth__form form">
                    <h2 className="form__title">Вход</h2>
                    <div className="form__input-wrapper">
                        <label className="form__label" htmlFor="login"  >Логин</label>
                        <input type="email" className="form__input" placeholder="Введите e-mail" name="login" />
                    </div>
                    <div className="form__input-wrapper">
                        <label className="form__label" htmlFor="password" >Пароль</label>
                        <input type={passwordVisible ? "text" : "password"} className="form__input" placeholder="Введите пароль" name="password" />
                        <button
                            type="button"
                            className="form__visibility-button"
                            onClick={() => { setPasswordVisible(!passwordVisible) }}
                        >
                            <img src={eyeIconUrl} alt="" />
                        </button>
                    </div>
                    <button type="submit" className="form__button button button-accent">Войти</button>
                </form>
            </div>
        </div>
    )
}