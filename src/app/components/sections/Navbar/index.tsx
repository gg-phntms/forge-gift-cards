import { NavbarWrapper, LogoWrapper, Links } from "./styles";

export const Navbar = () => {
  return(
    <NavbarWrapper>
      <LogoWrapper>
        Your logo here
      </LogoWrapper>
      <Links>
        <li>
          <a href="/">Link 1</a>
        </li>
        <li>
          <a href="/">Link 2</a>
        </li>
        <li>
          <a href="/">Link 3</a>
        </li>
        <li>
          <a href="/">Link 4</a>
        </li>
      </Links>
    </NavbarWrapper>
  )
}