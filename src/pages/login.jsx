import { BlackDividers } from '../components/black-dividers/black-dividers';
import { Login } from '../components/login/login';
import { Footer } from '../components/footer/footer';
import { ButtonBackToTop } from '../components/button-back-to-top/button-back-to-top';
import { NavigationMenu } from '../components/nav/nav';
import { Tittle } from '../components/tittle/tittle';

export function LoginPage() {
    return (
        <div className="m-0 p-0">
            <ButtonBackToTop />
            <NavigationMenu/>
            <BlackDividers />
            <Tittle title="Login" />
            <Login />
            <Footer />
        </div>
    )
}