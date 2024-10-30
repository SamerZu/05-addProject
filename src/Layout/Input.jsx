import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, texArea, ...props }, ref) {
  return (
    <div className="flex flex-col">
      <label className="font-semibold mb-2">{label}</label>
      {texArea ? (
        <textarea
          ref={ref}
          className="bg-gray-200 p-2 pb-5 mb-3 rounded-md w-full"
          {...props}
        />
      ) : (
        <input
          ref={ref}
          className="bg-gray-200 p-2 mb-3 rounded-md w-full"
          {...props}
        />
      )}
    </div>
  );
});
export default Input;
