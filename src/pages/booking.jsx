import { Helmet } from 'react-helmet';
import { BlackDividers } from '../components/black-dividers/black-dividers';
import { Booking } from '../components/booking/booking';
import { ButtonBackToTop } from '../components/button-back-to-top/button-back-to-top';
import { NavigationMenu } from '../components/nav/nav';
import { Footer } from '../components/footer/footer';

export function BookingPage() {
    return (
        <div className="m-0 p-0">
            <Helmet>
            <title>Cita</title>
            </Helmet>
            <ButtonBackToTop />
            <NavigationMenu />
            <BlackDividers />
            <Booking />
            <Footer />
        </div>
    )
}