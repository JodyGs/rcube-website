type Props = {
  title: string;
  description?: string;
  className?: string;
};

export default function SectionHeading({
  title,
  description,
  className,
}: Props) {
  return (
    <div className={className}>
      <h3 className="font-satoshi text-6xl">{title}</h3>
      {description && (
        <p className="text-xl text-custom-grey-100">{description}</p>
      )}
    </div>
  );
}
