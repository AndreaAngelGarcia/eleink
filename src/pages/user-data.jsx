
import { Footer } from '../components/footer/footer';
import { UserData } from '../components/user-data/user-data';
import { ButtonBackToTop } from '../components/ButtonBackToTop/button-back-to-top';
import { BlackDividers } from '../components/black-dividers/black-dividers';
import { Tittle } from '../components/tittle/tittle';

export function UserDataPage() {
    return (
        <div className="m-0 p-0">
            <ButtonBackToTop />
            <BlackDividers/>
            <Tittle title="Mis datos" />
            <UserData/>
            <Footer />
        </div>
    )
}