import { BannerHome } from '../components/banner/banner';
import { GalleryHome } from '../components/gallery-home/gallery-home';
import { NavigationMenu } from '../components/nav/nav';
import { Footer } from '../components/footer/footer';
import {FormDisabledDemo} from '../components/register/register';
//import {Login} from '../components/login/login';
import { Login2 } from '../components/login/login2';

export function Home() {
    return(
        <div className="m-0 p-0">
        <NavigationMenu/>
        <BannerHome/>
        <GalleryHome/>
        <Footer/>
        <FormDisabledDemo/>
        <Login2></Login2>

        </div>
    )
}