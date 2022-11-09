import Head from "next/head";
import { NavProps } from "./PropsInterface";
import { Wrapper, NavStyle, NavUl, NavLi, NavRight } from "./Styles";

import Link from "next/link";
import { ImageComp } from "./Images";
import { MarginSpacer } from "./Spacer";
const Navbar = (props: NavProps) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <NavStyle>
        <ImageComp
          src="/assets/nav-logo.png"
          alt="nav logo"
          width="160px"
          height="24.95px"
          fluid={false}
        />
        <NavUl>
          <NavLi>
            <Link href="#trade">Trade</Link>
          </NavLi>
          <NavLi>
            <Link href="">Earn</Link>
          </NavLi>
          <NavLi>
            <Link href="">Win</Link>
          </NavLi>
          <NavLi>
            <Link href="">NFT</Link>
          </NavLi>
          <NavLi>
            <Link href="">...</Link>
          </NavLi>
        </NavUl>
        <NavRight>
          <NavUl>
            <NavLi>
              <ImageComp
                src="/assets/nav-item.png"
                alt="nav logo"
                width="25px"
                height="25px"
                fluid={false}
              />
              <MarginSpacer mt="2px">$4.282</MarginSpacer>
            </NavLi>
            <NavLi>Earn</NavLi>
            <NavLi>Win</NavLi>
            <NavLi>NFT</NavLi>
            <NavLi>...</NavLi>
          </NavUl>
        </NavRight>
      </NavStyle>
    </>
  );
};

export default Navbar;
