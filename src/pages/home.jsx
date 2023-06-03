import { BannerHome } from '../components/banner/banner';
import { GalleryHome } from '../components/gallery-home/gallery-home';
import { NavigationMenu } from '../components/nav/nav';
import { Footer } from '../components/footer/footer';

export function Home() {
    return(
        <div className="m-0 p-0">
        <NavigationMenu/>
        <BannerHome/>
        <GalleryHome/>
        <Footer/>
        </div>
    )
}