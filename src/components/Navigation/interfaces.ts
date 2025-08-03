// Types
export interface NavItem {
  id: string;
  label: string;
}

export interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}
