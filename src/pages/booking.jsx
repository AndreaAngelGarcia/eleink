import { Footer } from '../components/footer/footer';
import { ButtonBackToTop } from '../components/ButtonBackToTop/button-back-to-top';
import { BlackDividers } from '../components/black-dividers/black-dividers';
import { Booking } from '../components/booking/booking';

export function BookingPage() {
    return (
        <div className="m-0 p-0">
            <ButtonBackToTop />
            <BlackDividers />
            <Booking />
            <Footer />
        </div>
    )
}