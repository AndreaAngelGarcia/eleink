import { NavigationMenu } from '../components/nav/nav';
import { Footer } from '../components/footer/footer';
import { Tittle } from '../components/tittle/tittle';
import { ButtonBackToTop } from '../components/ButtonBackToTop/button-back-to-top';

export function ShopPage() {
    return (
        <div className="m-0 p-0">
            <ButtonBackToTop />
            <NavigationMenu />
            <Tittle title="Tienda" />
            <Footer />
        </div>
    )
}