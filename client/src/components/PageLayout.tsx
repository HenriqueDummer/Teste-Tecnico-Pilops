import PilopsHeader from "./PilopsHeader";

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <section className="bg-dark-bg w-full px-20 pt-20 min-h-dvh text-text-primary flex flex-col items-center overflow-auto scrollbar-hide">
      <PilopsHeader />
      {children}
    </section>
  );
};

export default PageLayout;
