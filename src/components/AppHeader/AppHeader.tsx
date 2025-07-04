/**
 * App Header:
 * ---------------
 * The AppHeader component shows how to balance Carbon’s rigor with real-world flexibility:
 * 🔹 Smart architecture:
 *  ✔️ Extends Carbon’s UIShell.Header
 *  ✔️ Exposes logo, nav, and actions as ReactNode props
 *  ✔️ Maintains Carbon’s spacing/accessibility guarantees
 *
 * 🔹 Consumer benefits:
 *  ✔️ Render anything – SVG logos, custom nav components, etc.
 *  ✔️ Zero wrapper hell – No nested prop-drilling
 *  ✔️ Type-safe – children validated via TypeScript
 */

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderGlobalBar,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';

import Link from 'next/link';

interface HeaderContainerType {
  isSideNavExpanded: boolean;
  onClickSideNavExpand: () => void;
}

interface AppHeaderProps {
  brandLabel: string;
  brandRoute: string;
  // ReactNode can be anything we want: string, number, JSX, component, etc ...
  brand: React.ReactNode;
  navigation: React.ReactNode;
  globalBarItems: React.ReactNode;
}

const AppHeader = ({
  brand,
  brandLabel,
  brandRoute = '/',
  navigation,
  globalBarItems,
}: AppHeaderProps) => {
  // ARIA labels
  const labelOpenMenu = 'Open menu';
  const labelSideNav = 'Side navigation';

  return (
    <HeaderContainer
      render={({
        isSideNavExpanded,
        onClickSideNavExpand,
      }: HeaderContainerType) => (
        <Header aria-label={brandLabel}>
          <SkipToContent />
          <HeaderMenuButton
            aria-label={labelOpenMenu}
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName prefix="" as={Link} href={brandRoute} passHref>
            {brand}
          </HeaderName>
          <HeaderNavigation aria-label={brandLabel}>
            {navigation}
          </HeaderNavigation>
          <SideNav
            aria-label={labelSideNav}
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>{navigation}</HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>{globalBarItems}</HeaderGlobalBar>
        </Header>
      )}
    />
  );
};

export default AppHeader;
