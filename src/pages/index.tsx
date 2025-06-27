
import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="container px-md:px-5 mx-auto ">
        {/* Header */}
        <div className="mb-8">
          <Header />
        </div>

        {/* Dashboard */}
        <Dashboard />
      </section>
    </DefaultLayout>
  );
}

//flex flex-col items-center justify-center gap-4 py-8 md:py-10