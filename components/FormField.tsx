// dodać typy!

export default function FormField({ name, label, type, error, ...props }: any) {
  return (
    <div className="w-full mb-3">
      <label className="block text-sm font-700 tracking-wide uppercase  mb-1 mx-2">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          className={`w-full p-3  border rounded-lg h-64 focus:border-black ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          className={`border p-3  rounded-lg  focus:border-black w-full resize-none mb-1 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
          {...props}
        />
      )}
      {error && <p className="text-red-600 text-sm  px-3 m-2 ">{error}</p>}
    </div>
  );
}
