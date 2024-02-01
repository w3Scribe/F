import Image from "next/image";

interface IList {
  list: string;
}

export default function List({ list }: IList): JSX.Element {
  return (
    <div className=" flex items-center gap-2">
      <span className="inline-block w-3.5 h-3.5 relative">
        <Image src="/icon-list.svg" alt="icon-list" layout="fill" />
      </span>
      <p className="text-sm text-slate-700">{list}</p>
    </div>
  );
}
