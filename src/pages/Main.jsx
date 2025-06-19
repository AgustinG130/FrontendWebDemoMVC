import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';
import { Profile } from '../atoms/Profile';
import { CustomPost } from '../components/CustomPost';
import { Post } from '../components/Post';


export function MainPage() {

    return (
        <div className='main-container'>
            <div className="row g-1 justify-content-center text-center">
                <div className="col-12 col-md-3 row-left">
                </div>
                
                <div className="col-12 col-md-6 row-middle">
                    <CustomPost />
                    <Post />
                </div>

                <div className="col-12 col-md-3 row-right">
                <h2 className='fw-bold fs-2 fs-md-3 fs-lg-1 mt-4'>Ucuddit</h2>
                    <ul className='list-unstyled user-info'>
                        <li className='account-text d-flex flex-column align-items-center'> Perfil
                            <div className='btn-profile-container d-flex flex-column align-items-center'>
                            <Profile />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
