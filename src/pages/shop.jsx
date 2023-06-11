import { Footer } from '../components/footer/footer';
import { Tittle } from '../components/tittle/tittle';
import { BlackDividers } from '../components/black-dividers/black-dividers';
import { ButtonBackToTop } from '../components/button-back-to-top/button-back-to-top';
import { NavigationMenu } from '../components/nav/nav';

export function ShopPage() {
    return (
        <div className="m-0 p-0">
            <ButtonBackToTop />
            <NavigationMenu />
            <BlackDividers/>
            <Tittle title="Tienda" />
            <Footer />
        </div>
    )
}