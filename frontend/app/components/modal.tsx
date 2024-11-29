type ModalProps = {
  children: React.ReactNode;
};

export const Modal = (props: ModalProps) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
        <div className="text-center">
          <div className="flex justify-center mt-4">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
