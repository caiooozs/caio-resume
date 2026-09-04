"use client";

import { NavBarView } from "./NavBar.view";
import useNavBarViewModel from "./Navbar.viewmodel";

export default function NavBar() {
  const props = useNavBarViewModel();
  return <NavBarView {...props} />;
}
