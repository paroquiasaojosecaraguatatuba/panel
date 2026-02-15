import { LogOut } from "lucide-react";
import Image from "next/image";

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <Image
        src="https://github.com/gihoekveld.png"
        alt=""
        className="h10 w-10 rounded-full"
        width={40}
        height={40}
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-brand-0">
          Paróquia São José
        </span>
        <span className="truncate text-sm text-brand-200">
          parsaojosecaraguatatuba@gmail.com
        </span>
      </div>
      <button
        type="button"
        className="ml-auto rounded-md p-2 hover:cursor-pointer hover:bg-brand-800"
      >
        <LogOut className="h-5 w-5 text-brand-300" />
      </button>
    </div>
  );
}
