import { Helmet } from 'react-helmet';
import { Footer } from '../components/footer/footer';
import { Tittle } from '../components/tittle/tittle';
import { ButtonBackToTop } from '../components/button-back-to-top/button-back-to-top';
import { BlackDividers } from '../components/black-dividers/black-dividers';
import { GalleryPortfolio } from '../components/gallery-portfolio/gallery-portfolio';
import { NavigationMenu } from '../components/nav/nav';

export function PortfolioPage() {
    return (
        <div>
            <Helmet>
            <title>Portfolio</title>
            </Helmet>
            <ButtonBackToTop />
            <NavigationMenu />
            <BlackDividers />
            <Tittle title="Porfolio" />
            <GalleryPortfolio />
            <Footer />
        </div>
    )
}