import {
  OdooChildPage,
  odooChildMetadata,
} from "@/components/odoo/child/OdooChildPage";
import { accountingPage } from "@/components/odoo/accounting/page.config";

export const metadata = odooChildMetadata(accountingPage);

export default function Page() {
  return <OdooChildPage config={accountingPage} />;
}
