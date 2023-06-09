import { Footer } from '../components/footer/footer';
import { Tittle } from '../components/tittle/tittle';
import { ButtonBackToTop } from '../components/ButtonBackToTop/button-back-to-top';
import { BlackDividers } from '../components/black-dividers/black-dividers';

export function ShopPage() {
    return (
        <div className="m-0 p-0">
            <ButtonBackToTop />
            <BlackDividers/>
            <Tittle title="Tienda" />
            <Footer />
        </div>
    )
}