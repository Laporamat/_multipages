import { useLocation, useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const navigate = useNavigate();
    const location = useLocation(); 

    return ( 
        <div className='footer-container'>
            <button 
                className={`btn btn-light ${location.pathname === '/spu' ? 'active' : ''}`} 
                onClick={() => window.location.href = 'https://www.spu.ac.th/'}
            >
                SPU
            </button>
            <button 
                className={`btn btn-light ${location.pathname === '/sit' ? 'active' : ''}`} 
                onClick={() => window.location.href = 'https://www.spu.ac.th/fac/informatics/'}
            >
                SIT
            </button>
            <button 
                className={`btn btn-light ${location.pathname === '/csi' ? 'active' : ''}`} 
                onClick={() =>window.location.href = 'https://www.spu.ac.th/fac/informatics/'}
            >
                CSI
            </button>
        </div> 
    );
}

export default Footer;
