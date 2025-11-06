type NavItem = {
  title: string;
  icon: React.ReactNode;
  redirect?: string;
};

interface INavBar {
  items: NavItem[];
}

export type { INavBar, NavItem };
