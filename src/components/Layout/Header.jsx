import logoUrl from '../../assets/Images/Icons/Logo/Logo-full.svg';
import arrowUrl from '../../assets/Images/Icons/Arrow-right.svg';

export default function Header() {

  return (
    <header className='header'>
      <div className="header-wrapper">
        <a className="header__logo-wrapper" href='/'>
          <img className='header__logo' src={logoUrl} alt="Забота рядом" width={224} height={32} />
        </a>
        <div className="header__link-wrapper">
          <a className='header__link' href="/">Запросы о помощи</a>
        </div>
        {/* TODO  если пользователь авторизован: отображать иконку с выпадающим списком, если нет то кнопку*/}
        {
          <button className='header__button button'>
            ВОЙТИ
            <div className="button__image-wrapper">
              <img src={arrowUrl} alt="" />
            </div>
          </button>
        }
      </div>
    </header>
  )
}
