import axios from "axios";

export const getUsedPlanes = async (): Promise<{planes: string[]}> => {
  try {
    const response = await axios.get("/used_planes");
    const planes = response.data;

    return planes;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get used planes");
  }
};
