const CardTitle = ({ index, title }: { index: number; title: string }) => {
  return (
    <div className="pb-8">
      <h2 className="font-bold text-3xl mb-2 flex items-center">
        <span className="font-mono text-second mr-3 text-xl">
          {0}
          {index}.
        </span>
        <span className="relative">
          {title}
          <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-second rounded-full"></span>
        </span>
      </h2>
      <div className="border-t border-primary/30 w-1/2 mt-4"></div>
    </div>
  );
};

export default CardTitle;
