interface Product {
  id: number;
  title: string;
  body_html: string | null;
  vendor: string;
  product_type: string;
  created_at: string;
  handle: string;
  updated_at: string;
  published_at: string;
  template_suffix: string | null;
  published_scope: string;
  tags: string;
  status: string;
  admin_graphql_api_id: string;
  variants: Variant[];
  options: Option[];
  images: Image[];
  image: Image;
}

interface Variant {
  id: number;
  product_id: number;
  title: string;
  price: string;
  sku: string;
  position: number;
  inventory_policy: string;
  compare_at_price: string | null;
  fulfillment_service: string;
  inventory_management: string;
  option1: string | null;
  option2: string | null;
  option3: string | null;
  created_at: string;
  updated_at: string;
  taxable: boolean;
  barcode: string | null;
  grams: number;
  weight: number;
  weight_unit: string;
  inventory_item_id: number;
  inventory_quantity: number;
  old_inventory_quantity: number;
  requires_shipping: boolean;
  admin_graphql_api_id: string;
  image_id: number | null;
}

interface Option {
  id: number;
  product_id: number;
  name: string;
  position: number;
  values: string[];
}

interface FormOption {
  id: string;
  value: string;
}

interface Image {
  id: number;
  alt: string;
  position: number;
  product_id: number;
  created_at: string;
  updated_at: string;
  admin_graphql_api_id: string;
  width: number;
  height: number;
  src: string;
  variant_ids: number[];
}
interface FacebookAdsForm {
  campaignName: string;
  campaignObjectives: string;
  campaignStatus: string;
}