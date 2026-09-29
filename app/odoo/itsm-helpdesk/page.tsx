import {
  OdooChildPage,
  odooChildMetadata,
} from "@/components/odoo/child/OdooChildPage";
import { itsmPage } from "@/components/odoo/itsm/page.config";

export const metadata = odooChildMetadata(itsmPage);

export default function Page() {
  return <OdooChildPage config={itsmPage} />;
}
