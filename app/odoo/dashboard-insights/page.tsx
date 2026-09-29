import {
  OdooChildPage,
  odooChildMetadata,
} from "@/components/odoo/child/OdooChildPage";
import { dashboardPage } from "@/components/odoo/dashboard/page.config";

export const metadata = odooChildMetadata(dashboardPage);

export default function Page() {
  return <OdooChildPage config={dashboardPage} />;
}
