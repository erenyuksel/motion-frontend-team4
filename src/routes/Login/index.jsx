import LoginChild from "../../components/Login/Login_child"
import './styles.scss'

const Login = () => {
    return (
    <div className="login_main_container">
        <div className="login_left_container">
            <div className="login_logo"><img src="./src/assets/images/logo_white.png" alt="Motion" /></div>
            <div className="login_motion">Motion</div>
            <div className="login_about"><p>Conect with friends and the world around you with Motion</p></div>
            <div className="app_store_buttons">
                <div className="store_button"><img src="./src/assets/svgs/apple.svg" alt="Motion" /></div>
                <div className="store_button"><img src="./src/assets/images/logo_white.png" alt="Motion" /></div>
            </div>
            <div className="links">
                <div className="social_links">twittwe</div>
                <div className="social_links">facebook</div>
                <div className="social_links">instagram</div>
            </div>
            <div className="rights_reserved">@ Motion 2018. All rights reserved</div>
        </div>
        <div className="login_right_container"><LoginChild/></div>
    </div>
    )
}

export default Login