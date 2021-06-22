import {Link} from 'react-router-dom';

const Navigation = () => {
    const cartStyle ={
        background:'#F59E0D',
        display:'flex',
        padding:'6px 12px',
        borderRadius:'25px',
    }

    return (
        <>
            <nav className="container mx-auto flex items-center justify-between py-4">
                
                    <Link to="/">
                        <img style={{height:35}} src="/images/pizza (1).png" alt="logo" />
                    </Link>
                    <ul className="flex items-center">
                        <li className=""><Link to="/">Home</Link></li>
                        <li className="ml-6"><Link to="/products">Products</Link></li>
                        <li className="ml-6">
                            <Link to="/cart">
                            <div style={cartStyle}>
                                <span>10</span>
                                <img className="ml-2" style={{height:30}} src="/images/cart.png" alt=""></img>
                            </div>
                            </Link>
                        </li>
                    </ul>
            </nav>
        </>
    )
}

export default Navigation
