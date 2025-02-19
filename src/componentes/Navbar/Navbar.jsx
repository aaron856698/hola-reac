import './Navbar.css';
import Carts from '../CartWitget/CartWitget.jsx';
const David = () => {
  return (
    <header class="navbar">
    <div>
        <nav class="nav">
            <ul class="nav-list">
                <li class="nav-item"><a href="#enlace1" class="nav-link">Enlace 1</a></li>
                <li class="nav-item"><a href="#enlace2" class="nav-link">Enlace 2</a></li>
                <li class="nav-item"><a href="#enlace3" class="nav-link">Enlace 3</a></li>
                <li class="nav-item"><a href="#enlace4" class="nav-link">Enlace 4</a></li>
                <li class="nav-item"><a href="#enlace5" class="nav-link">Enlace 5</a></li>

            </ul>
              
              <Carts />
        </nav>
    </div>
</header>

  );
}

export default David;


