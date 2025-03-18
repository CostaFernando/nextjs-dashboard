import { Metadata } from "next";
import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers } from "@/app/lib/data";
import { Suspense } from "react";
import { TableRowSkeleton } from "@/app/ui/skeletons";

export const metadata: Metadata = {
  title: "Customers",
};
export default async function Page() {
  const customers = await fetchFilteredCustomers("");

  return (
    <>
      <Suspense fallback={<TableRowSkeleton />}>
        <CustomersTable customers={customers} />
      </Suspense>
    </>
  );
}
