import { NavigationMenu } from '../components/nav/nav';
import { Footer } from '../components/footer/footer';
import { Tittle } from '../components/tittle/tittle';
import { ButtonBackToTop } from '../components/ButtonBackToTop/button-back-to-top';

export function PortfolioPage() {
    return (
        <div>
            <ButtonBackToTop/>
            <NavigationMenu />
            <Tittle title="Porfolio" />
            <Footer />
        </div>
    )
}