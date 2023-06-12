import { Footer } from '../components/footer/footer';
import { Register2 } from '../components/register/register2';
import { ButtonBackToTop } from '../components/button-back-to-top/button-back-to-top';
import { NavigationMenu } from '../components/nav/nav';
import { BlackDividers } from '../components/black-dividers/black-dividers';
import { Tittle } from '../components/tittle/tittle';

export function SigninPage() {
    return (
        <div className="m-0 p-0">
            <ButtonBackToTop />
            <NavigationMenu />
            <BlackDividers />
            <Tittle title="Registro" />
            <Register2 />
            <Footer />
        </div>
    )
}