"use client";

import { useUser } from "@/src/context/user.provider";
import { logout } from "@/src/services/AuthService";
import { Avatar } from "@nextui-org/avatar";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown"; 
import { useRouter } from "next/navigation";

const NavbarDropDown = () => {
  
  const router = useRouter();
  const {setIsLoading:userLoading}  = useUser()

  const handleLogout= ()=>{
    logout()
    userLoading(true)
  }

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar name="aihay" className="cursor-pointer" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleNavigation("/profile")}>
          Profile
        </DropdownItem>

        <DropdownItem onClick={() => handleNavigation("/profile/settings")}>
          Setting
        </DropdownItem>

        <DropdownItem onClick={() => handleNavigation("/profile/create-post")}>
          Create Post
        </DropdownItem>

        <DropdownItem
        onClick={()=> handleLogout()}
        className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropDown;
