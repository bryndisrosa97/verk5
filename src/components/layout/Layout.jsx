
import s from './Layout.scss';
import PropTypes from 'prop-types'; 


Layout.propTypes = {
  children: PropTypes.element,
}

export function Layout({ title, children }) {
  return (
    <div className={s.layout}>
      <header className={s.layout__header}>
        <h1>RÚV fréttir</h1>
      </header>
      <main className={s.layout__main}>
        {children}
      </main>
      <hr></hr>
      <footer>
        <div className={s.layout__footer}>
          <p>Fréttir frá <a className={s.layout__attribute} href="http://www.ruv.is">RÚV</a> </p>
        </div>
      </footer>
    </div>
  )
}