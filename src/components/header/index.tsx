import classes from "./style.module.scss"

const Header = () => {
    const navItems = ['Главная','Учебник','Игры','Статистика']
    return(
        <header className = {classes.header} >
            <div className = {classes.container}>
                <div className={classes.logo}>
                    <img src="../assets/icons/logo.png" alt="asd" />
                    <h5>RSLang</h5>
                </div>
                <nav>
                    <ul className={classes.navList}>
                        {navItems.map((item) => {
                            return <li> <a href="">{item}</a></li>
                        })}
                    </ul>
                </nav>
                <a href="##">Войти</a>
            </div>
        </header>
    )
}

export default Header;