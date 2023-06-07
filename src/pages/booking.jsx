import { NavigationMenu } from '../components/nav/nav';
import { Footer } from '../components/footer/footer';
import { ButtonBackToTop } from '../components/ButtonBackToTop/button-back-to-top';

export function BookingPage() {
    return (
        <div className="m-0 p-0">
            <ButtonBackToTop />
            <NavigationMenu />
            <Footer />
        </div>
    )
}