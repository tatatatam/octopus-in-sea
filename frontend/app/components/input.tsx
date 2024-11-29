type InputProps = {} & React.InputHTMLAttributes<HTMLInputElement>;
export const Input = (props: InputProps) => {
    return (    <input className={`mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      
      
    ${props.className?props.className:''}`}
    {...props}
    />
    );
}