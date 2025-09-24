import React from "react";
import { useGetUsedPlanes } from "../hooks/useGetUsedPlanes";

type SelectPlaneProps = {
  plane: string | undefined;
  setPlane: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const SelectPlane = ({ plane, setPlane }: SelectPlaneProps) => {
  const { data, isLoading } = useGetUsedPlanes();

  return (
    data &&
    !isLoading && (
      <>
        <div className="flex flex-col">
          <label htmlFor="planes" className="">
            Selecione um avião para filtrar
          </label>
          <select
            id="planes"
            onChange={(e) => setPlane(e.target.value)}
            value={plane}
            className="p-2 text-sm rounded-lg border border-gray-700 dark:bg-dark-bg-secondary focus:outline-none"
          >
            <option defaultChecked value="">
              Todos
            </option>
            {data.planes.map((plane) => (
              <option value={plane}>{plane}</option>
            ))}
          </select>
        </div>
      </>
    )
  );
};

export default SelectPlane;
