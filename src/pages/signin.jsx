import { Footer } from '../components/footer/footer';
import { Register2 } from '../components/register/register2';
import { ButtonBackToTop } from '../components/button-back-to-top/button-back-to-top';
import { NavigationMenu } from '../components/nav/nav';

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