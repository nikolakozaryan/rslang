import classes from "./style.module.scss"
import Navbar from "../ui/nav/Navbar";

const Header = () => {
    return(
        <header className = {classes.header} >
            <div className = {classes.container}>
                <div className={classes.logo}>
                    <img src="../assets/icons/logo.png" alt="asd" />
                    <h5>RSLang</h5>
                </div>
                <Navbar/>
                <a href="##">Войти</a>
            </div>
        </header>
    )
}

export default Header;