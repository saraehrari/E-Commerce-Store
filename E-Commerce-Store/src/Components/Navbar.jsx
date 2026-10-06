export default function Navbar() {
    return (
        <nav>
          <NavLink

          to="/"
         className={({ isActive }) => (isActive ? "active" : "")}
>
              Home
         </NavLink>


        <NavLink
          
          to="/about"
         className={({ isActive }) => (isActive ? "active" : "")}
>
              About
         </NavLink>


         <NavLink
          
          to="/products"
         className={({ isActive }) => (isActive ? "active" : "")}
>
              Products
         </NavLink>



         <NavLink
          
          to="/products/:id"
         className={({ isActive }) => (isActive ? "active" : "")}
>
              Product Details
         </NavLink>




         <NavLink
          
          to="/categories"
         className={({ isActive }) => (isActive ? "active" : "")}
>
              Categories
         </NavLink>



         <NavLink
          
          to="/card"
         className={({ isActive }) => (isActive ? "active" : "")}
>
              Shopping Cart
         </NavLink>



         <NavLink
          
          to="/checkout"
         className={({ isActive }) => (isActive ? "active" : "")}
>
              Checkout
         </NavLink>

          </nav>)
}