import {
  OdooChildPage,
  odooChildMetadata,
} from "@/components/odoo/child/OdooChildPage";
import { implementationPage } from "@/components/odoo/implementation/page.config";

export const metadata = odooChildMetadata(implementationPage);

export default function Page() {
  return <OdooChildPage config={implementationPage} />;
}
