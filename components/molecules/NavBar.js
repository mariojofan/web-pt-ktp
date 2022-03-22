import { NavItem } from '../atom';
// import classnames from 'classnames';

export default function NavBar() {
    return (
        <ul className='flex justify-center space-x-10 py-20'>
            <NavItem>Home</NavItem>
            <NavItem>Tentang Kami</NavItem>
            <NavItem>Layanan</NavItem>
            <NavItem>Produk</NavItem>
        </ul> 
    )
}
