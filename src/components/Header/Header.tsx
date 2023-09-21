import Styles from './Header.module.css'
const Header = () => {
  return (
    <header className={Styles.header}>

      <div>
        <div>
          <h3 className={Styles.header_main_logo}>Job<span>Sync</span></h3>
        </div>
      </div>

      <div>
        <ul className={Styles.header_main_links}>
          <li>Find Jobs</li>
          <li>Find Company</li>
          <li>Find Resources</li>
        </ul>
      </div>

      <div className={Styles.header_main_buttons}>
       <button>SignIn</button>
       <button>SIgnUp</button>
      </div>
    </header>
  )
}

export default Header