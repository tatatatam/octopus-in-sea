type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`mt-1 block w-full px-3 py-2 bg-green-500 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          ${props.className ? props.className : ""}`}
      {...props}
    />
  );
};
