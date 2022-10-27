import axios from "axios";

export async function getObjects() {
  return axios
    .get("https://collectionapi.metmuseum.org/public/collection/v1/objects")
    .then((response) => {
      console.log(response);
      return response;
    });
}

export async function getSingleObject(id: number) {
  return axios
    .get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}
  `
    )
    .then((response) => {
      console.log("Single object call: ", response);
      return response;
    });
}

export async function searchArt(q: string) {
  return axios.get(
    "https://collectionapi.metmuseum.org/public/collection/v1/search",
    {
      params: {
        q: q,
        hasImages: true,
      },
    }
  );
}
