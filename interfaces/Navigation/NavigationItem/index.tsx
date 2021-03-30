export default interface NavigationItem {
  name: String;
  path: string;
  featured?: boolean;
  items?: NavigationItem[];
}
