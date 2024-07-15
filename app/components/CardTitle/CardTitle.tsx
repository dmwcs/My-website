const CardTitle = ({ index, title }: { index: number; title: string }) => {
  return (
    <div className="pb-8">
      <h2 className="font-semibold">
        <span className="font-mono text-primary font-normal text-lg">
          {0}
          {index}.{" "}
        </span>
        {title}
      </h2>
      <div className="border-t border-primary w-1/2"></div>
    </div>
  );
};

export default CardTitle;
