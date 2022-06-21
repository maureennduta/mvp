import React from "react";
// import logo from "../../logo.png";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  HeaderGlobalBar,
  SkipToContent,
} from "carbon-components-react";

const NavHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="IPI">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName href="/" prefix="">
          {/* <img className="image" src={logo} alt="JHPIEGO LOGO" /> */}
        </HeaderName>
        <HeaderName href="/" prefix="Intellectual">
          [Property Investment]
        </HeaderName>
        <HeaderGlobalBar>
          <span>
            <HeaderName href="/" prefix="">
              iPi
            </HeaderName>
          </span>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default NavHeader;
