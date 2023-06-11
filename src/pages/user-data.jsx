import { Footer } from '../components/footer/footer';
import { UserData } from '../components/user-data/user-data';
import { BlackDividers } from '../components/black-dividers/black-dividers';
import { Tittle } from '../components/tittle/tittle';
import { ButtonBackToTop } from '../components/button-back-to-top/button-back-to-top';
import { NavigationMenu } from '../components/nav/nav';

export function UserDataPage() {
    return (
        <div className="m-0 p-0">
            <ButtonBackToTop />
            <NavigationMenu />
            <BlackDividers/>
            <Tittle title="Mis datos" />
            <UserData/>
            <Footer />
        </div>
    )
}