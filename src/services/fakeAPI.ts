interface Continent {
  id: number;
  slug: string;
  name: string;
  summary: string;
  carouselURL: string;
}

interface ContinentInfo {
  slug: string;
  name: string;
  description: string;
  bannerImage: string;
  countries: number;
  languages: number;
  cities: number;
  citiesList: string;
  cities100:
  {
    city: string;
    country: string;
    thumbnail: string;
    flag: string;
  }[]
}

export default function fakeAPIClient() {
  async function get(resource: string): Promise<Continent[]> {
    const res = await fetch(`${process.env.FAKE_API_ENDPOINT}/${resource}`);
    const data = await res.json();

    return data;
  }
  async function getContinentByUID(slug: string): Promise<ContinentInfo> {
    const res = await fetch(`${process.env.FAKE_API_ENDPOINT}/continentInfo/?slug=${slug}`);
    const data = await res.json();

    return data;
  }

  return { get, getContinentByUID };
}
