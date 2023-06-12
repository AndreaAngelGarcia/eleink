import { Helmet } from 'react-helmet';
import { ButtonBackToTop } from '../components/button-back-to-top/button-back-to-top';
import { NavigationMenu } from '../components/nav/nav';
import { BannerHome } from '../components/banner/banner';
import { AboutHome } from '../components/about/about';
import { BlackDividers } from '../components/black-dividers/black-dividers';
import { Tittle } from '../components/tittle/tittle';
import { GalleryHome } from '../components/gallery-home/gallery-home';
import { Footer } from '../components/footer/footer';

export function HomePage() {
    return (
        <div className="m-0 p-0">
            <Helmet>
                <title>Inicio</title>
            </Helmet>
            <ButtonBackToTop />
            <NavigationMenu />
            <BannerHome />
            <AboutHome />
            <BlackDividers />
            <Tittle title="Portfolio" />
            <GalleryHome />
            <Footer />
        </div>
    );
}
