import { NavigationMenu } from '../components/nav/nav';
import { Footer } from '../components/footer/footer';
import { Register2 } from '../components/register/register2';
import { ButtonBackToTop } from '../components/ButtonBackToTop/button-back-to-top';

export function SigninPage() {
    return (
        <div className="m-0 p-0">
            <ButtonBackToTop />
            <NavigationMenu />
            <Register2 />
            <Footer />
        </div>
    )
}