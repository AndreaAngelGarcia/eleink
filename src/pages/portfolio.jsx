import { NavigationMenu } from '../components/nav/nav';
import { Footer } from '../components/footer/footer';
import { Tittle } from '../components/tittle/tittle';
import { ButtonBackToTop } from '../components/ButtonBackToTop/button-back-to-top';
import { BlackDividers } from '../components/black-dividers/black-dividers';

export function PortfolioPage() {
    return (
        <div>
            <ButtonBackToTop/>
            <NavigationMenu />
            <BlackDividers/>
            <Tittle title="Porfolio" />
            <Footer />
        </div>
    )
}