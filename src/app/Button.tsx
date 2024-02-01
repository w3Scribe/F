interface IName {
  name: string;
}

export default function Button({ name }: IName): JSX.Element {
  return (
    <button
      className="h-9 bg-dark-slate-grey w-full mt-3 mb-6 text-white rounded-md text-xs  hover:bg-gradient-to-r from-red-500 to-orange-500 
      hover:shadow-lg hover:shadow-rose-500/30 font-semibold transition-all"
    >
      {name}
    </button>
  );
}
