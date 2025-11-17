import PageLayout from "@/layouts/PageLayout";
import {
  EditableName,
  OptionParams,
  EditableTable,
  OptionHeader,
} from "./dynamic";

function page() {
  return (
    <PageLayout>
      <div className="w-full h-full flex flex-col gap-8">
        <OptionHeader />
        <EditableName />
        <OptionParams />
        <div className="w-full h-full">
          <EditableTable />
        </div>
      </div>
    </PageLayout>
  );
}

export default page;
