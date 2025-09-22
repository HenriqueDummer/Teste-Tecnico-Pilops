import LogoWithName from "/LogoWithName.svg";

const PilopsHeader = () => {
  return (
    <header className="flex flex-col justify-center items-center mt-2">
      <img src={LogoWithName} alt="Pilops Logo" />
      <p className="font-manrope mt-2">
        Your virtual pilot career for Flight Simulator
      </p>
    </header>
  );
};

export default PilopsHeader;
