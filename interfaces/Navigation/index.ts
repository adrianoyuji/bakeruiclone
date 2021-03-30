import NavigationItem from "./NavigationItem";

export default interface Navigation {
  id: String;
  title: string;
  dropdownType: DropdownType;
  items: NavigationItem[];
}

export enum DropdownType {
  SIMPLE = "SIMPLE",
  WIDE = "WIDE",
}
