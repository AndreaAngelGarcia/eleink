import { NavigationMenu } from '../components/nav/nav';
import { Footer } from '../components/footer/footer';
import { Login2 } from '../components/login/login2';

export function LoginPage() {
    return(
        <div className="m-0 p-0">
        <NavigationMenu/>
        <Login2/>
        <Footer/>
        </div>
    )
}