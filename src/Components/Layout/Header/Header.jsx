import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

export default function Header() {
  const { updateProfile, user, signOutAccount } = useContext(AuthContext);
  console.log(user , updateProfile)
  const { pathnaFe } = useLocation();
  const closeMenu = () => setIsMenuOpen(false);
  const navigate = useNavigate();
  // handle account signout
  const handleSignOut = () => {
    signOutAccount()
      .then(() => {
        setTimeout(() => {
          swal('Logout Successfull', '', 'success');
        }, 500);
        closeMenu();
      })
      .catch((error) => {
        swal('Error an occur', error.message, 'error');
      });
  };

  // console.log(user.photoURL)
  // console.log(user.displayName)
  return (
    <div>
      <div className="navbar flex justify-between bg-base-100">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to={"/"} className="text-base">Home</Link></li>
              <li><Link to={"/all-craft"} className="text-base">All Art & craft Items</Link></li>
              {
                user && <li><Link to={"/add-products"} className="text-base">Add Craft Item</Link></li>
              }

              {
                user && <li><Link to={"/"} className="text-base">My Art&Craft List</Link></li>
              }
              

            </ul>
          </div>

          <p><Link to={"/"} className="text-2xl font-bold">Embark</Link></p>
        </div>
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to={"/"} className="text-base font-semibold">Home</Link></li>
            <li><Link to={"/all-craft"} className="text-base font-semibold">All Art & craft Items</Link></li>
            {
                user && <li><Link to={"//add-products"} className="text-base font-semibold">Add Craft Item</Link></li>
              }

              {
                user && <li><Link to={"/"} className="text-base font-semibold">My Art&Craft List</Link></li>
              }
          </ul>
        </div>
        <div className="inline-block">

          {user ? <a onClick={handleSignOut} className="font-semibold bg-[#0A1319]  transition-all text-white px-10 py-2  cursor-pointer">Log out</a>
            :
            <Link to="/login" className="font-semibold border-2 border-[#0A1319] bg-[#0A1319]  transition-all text-white px-10 py-2">Login</Link>}

            <Link to="/signup" className="font-semibold border-2 border-[#0A1319] hover:bg-[#0A1319] hover:text-white transition-all px-10 py-2 ml-3">Register</Link>
        </div>

        {user &&
          <div className="w-14  rounded-full border border-black">

            <div className="tooltip tooltip-bottom relative z-10" data-tip={user?.displayName ? user?.displayName : ""}>
              {/* <img className="rounded-full" alt="Tailwind CSS Navbar component" /> */}
              <img className="rounded-full" src={user?.photoURL
              } alt="" />
            </div>
          </div>
        }

      </div>
    </div>
  );
}