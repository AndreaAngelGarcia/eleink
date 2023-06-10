import { BlackDividers } from '../components/black-dividers/black-dividers';
import { Login2 } from '../components/login/login2';
import { Footer } from '../components/footer/footer';
import { ButtonBackToTop } from '../components/button-back-to-top/button-back-to-top';

export function LoginPage() {
    return (
        <div className="m-0 p-0">
            <ButtonBackToTop />
            <BlackDividers />
            <Login2 />
            <Footer />
        </div>
    )
}