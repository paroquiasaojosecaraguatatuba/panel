/* eslint-disable @next/next/no-img-element */

export interface ChurchCardProps {
  community: {
    id: string;
    name: string;
    slug: string;
    createdAt: string;
    type: "parish_church" | "chapel";
    address: string;
    coverId: string;
    coverUrl: string;
  };
}

export const ChurchCard = ({ community }: ChurchCardProps) => {
  return (
    <div className="w-full h-68 rounded-lg shadow-sm bg-white flex-col items-start justify-start gap-3 hover:ring-1 hover:ring-brand-300 transition cursor-pointer outline-none focus:ring-2 focus:ring-brand-300 focus:ring-offset-2 overflow-hidden relative">
      <img
        src={community.coverUrl}
        alt=""
        className="w-full h-44 aspect-auto object-cover"
      />
      {community.type === "parish_church" && (
        <span className="px-2 py-1 text-xs rounded-full bg-brand-700 text-white ml-3 absolute top-2 right-2 z-10">
          Igreja Matriz
        </span>
      )}

      <div className="px-3 pt-2.5 pb-3">
        <h2 className="text-xl font-semibold text-brand-900 mb-2">
          {community.name}
        </h2>
        <p className="text-sm text-brand-900">{community.address}</p>
      </div>
    </div>
  );
};
