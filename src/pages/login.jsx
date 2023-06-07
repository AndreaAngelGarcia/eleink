import { ButtonBackToTop } from '../components/ButtonBackToTop/button-back-to-top';
import { NavigationMenu } from '../components/nav/nav';
import { BlackDividers } from '../components/black-dividers/black-dividers';
import { Login2 } from '../components/login/login2';
import { Footer } from '../components/footer/footer';

export function LoginPage() {
    return (
        <div className="m-0 p-0">
            <ButtonBackToTop />
            <NavigationMenu />
            <BlackDividers />
            <Login2 />
            <Footer />
        </div>
    )
}