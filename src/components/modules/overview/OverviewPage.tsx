import { CardsComponent } from "./CardsComponent";

export default function OverviewPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 border-b pb-3">
        Overview
      </h1>
      <div className="space-y-8 max-w-5xl mx-auto p-6">
        <CardsComponent />
      </div>
    </div>
  );
}
