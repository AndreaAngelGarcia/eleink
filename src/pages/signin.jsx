import { Helmet } from 'react-helmet';
import { Footer } from '../components/footer/footer';
import { Register } from '../components/register/register';
import { ButtonBackToTop } from '../components/button-back-to-top/button-back-to-top';
import { NavigationMenu } from '../components/nav/nav';
import { BlackDividers } from '../components/black-dividers/black-dividers';
import { Tittle } from '../components/tittle/tittle';

export function SigninPage() {
    return (
        <div className="m-0 p-0">
            <Helmet>
            <title>Registro</title>
            </Helmet>
            <ButtonBackToTop />
            <NavigationMenu />
            <BlackDividers />
            <Tittle title="Registro" />
            <Register />
            <Footer />
        </div>
    )
}