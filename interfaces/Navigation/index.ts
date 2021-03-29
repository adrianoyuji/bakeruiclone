export default interface Navigation {
  id: String;
  title: string;
  dropdownType: DropdownType;
  items: NavigationItem[];
}

interface NavigationItem {
  name: String;
  path: string;
  featured?: boolean;
  items?: NavigationItem[];
}

export enum DropdownType {
  SIMPLE = "SIMPlE",
  WIDE = "WIDE",
}
