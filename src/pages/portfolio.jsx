import { Footer } from '../components/footer/footer';
import { Tittle } from '../components/tittle/tittle';
import { ButtonBackToTop } from '../components/button-back-to-top/button-back-to-top';
import { BlackDividers } from '../components/black-dividers/black-dividers';
import { ButtonsPortfolio } from '../components/buttons-portfolio/buttons-portfolio';
import { GalleryPortfolio } from '../components/gallery-portfolio/gallery-portfolio';
import { NavigationMenu } from '../components/nav/nav';

export function PortfolioPage() {
    return (
        <div>
            <ButtonBackToTop />
            <NavigationMenu />
            <BlackDividers />
            <Tittle title="Porfolio" />
            <ButtonsPortfolio />
            <GalleryPortfolio />
            <Footer />
        </div>
    )
}