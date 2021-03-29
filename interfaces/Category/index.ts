import Product from "interfaces/Product";

export default interface Category {
  id: string;
  category_name: String;
  items: Product[];
}
