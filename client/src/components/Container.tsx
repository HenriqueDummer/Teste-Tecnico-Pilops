type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="p-5 bg-dark-bg-secondary border border-neutral-700 rounded-md duration-200 hover:bg-dark-bg-secondary/50">
      {children}
    </div>
  );
};

export default Container;
