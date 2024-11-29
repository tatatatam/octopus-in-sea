type CardProps = {
  detail: string;
  title: string;
  onRemove?: (id: string) => void | undefined;
  onEdit?: (id: string) => void | undefined;
  id: string;
};
export const Card: React.FC<CardProps> = ({
  detail,
  title,
  id,
  onRemove,
  onEdit,
}) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 w-full mb-1">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-gray-500">{detail}</p>
      {onRemove && (
        <button className="underline mr-1" onClick={() => onRemove(id)}>
          remove
        </button>
      )}
      {onEdit && (
        <button className="underline" onClick={() => onEdit(id)}>
          edit
        </button>
      )}
    </div>
  );
};
