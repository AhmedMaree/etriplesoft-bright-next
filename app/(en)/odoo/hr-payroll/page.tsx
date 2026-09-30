import {
  OdooChildPage,
  odooChildMetadata,
} from "@/components/odoo/child/OdooChildPage";
import { hrPage } from "@/components/odoo/hr/page.config";

export const metadata = odooChildMetadata(hrPage);

export default function Page() {
  return <OdooChildPage config={hrPage} />;
}
