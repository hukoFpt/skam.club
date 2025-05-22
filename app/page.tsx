import EventBanner from "@/components/molecules/Home/EventBanner.component";
import MainPageFilter from "@/components/molecules/Home/MainPageFilter.component";

export default function Home() {
  return (
    <div className="">
      <EventBanner />
      <MainPageFilter />
      {Array.from({ length: 22 }, (_, i) => (
        <div
          id={`section-${i}`}
          key={i}
          className="h-screen flex items-center justify-center border-b border-gray-300"
        >
          <h1 className="text-3xl font-bold">Section {i}</h1>
        </div>
      ))}
    </div>
  );
}
