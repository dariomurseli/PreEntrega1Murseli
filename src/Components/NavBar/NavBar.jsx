
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">

          
          {/*Brand*/}
          <a href="#" className="navbar-brand">Tu-eccommerce</a>
          {/*Links*/}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a href="#" className="nav-link">Accesorios</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Aceites</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Belleza</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">ONG</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Reprocann</a>
            </li>
          </ul>
          <CartWidget />
          </div>
        </nav>

    // <nav className="navbar navbar-expand-lg">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       Roccoon
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Accesorios
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Aceites
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             Belleza
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             ONG
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#">
    //             REPROCANN
    //           </a>
    //         </li>
    //       </ul>
    //       <CartWidget />
    //     </div>
    //   </div>
    // </nav>
  );
};
export default NavBar;
