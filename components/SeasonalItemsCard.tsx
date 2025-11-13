import { client } from "@/sanity/lib/client";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";
const builder = urlBuilder(client);

interface SeasonalItems {
  _id: string;
  name: string;
  description: string;
  price: string;
  photo?: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
}

async function getSeasonalItems(): Promise<SeasonalItems[]> {
  const query = `*[_type == "seasonalMenu"]{
    _id, name, description, price, photo}`;
  return await client.fetch(query);
}

export default async function SeasonItemsCard() {
  const items = await getSeasonalItems();

  return (
    <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center lg:gap-4">
      {items.map((item) => {
        const imgUrl = item.photo
          ? builder.image(item.photo).width(200).height(200).url()
          : null;

        return (
          <div
            key={item._id}
            className="bg-white p-4 flex flex-col items-center gap-2 rounded-lg shadow-lg md:w-[300px]"
          >
            {imgUrl && (
              <Image
                src={imgUrl}
                alt={item.name}
                width={200}
                height={200}
                className="rounded-lg"
              />
            )}
            <div className="flex justify-between w-full">
              <p className="font-semibold">{item.name}</p>
              <p className="text-[#5E2634] font-semibold">{item.price}</p>
            </div>
            <p className="text-[12px] opacity-80">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
