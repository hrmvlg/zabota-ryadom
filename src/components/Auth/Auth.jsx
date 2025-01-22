export default function Auth() {
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
                        <input type="password" className="form__input" placeholder="Введите пароль" name="password" />
                    </div>
                    <button type="submit" className="form__button button button-accent">Войти</button>
                </form>
            </div>
        </div>
    )
}