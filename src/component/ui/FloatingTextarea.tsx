export function FloatingTextarea({ label, name }) {
    return (
      <div className="relative w-full">
        <textarea
          name={name}
          rows={5}
          required
          placeholder=" "
          className="peer w-full border border-gray-300 rounded-md px-4 pt-5 pb-2 text-sm outline-none focus:border-black resize-none"
        />
        <label
          className="absolute left-4 top-2 text-gray-500 text-sm transition-all
          peer-placeholder-shown:top-4
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-400
          peer-focus:top-2
          peer-focus:text-sm
          peer-focus:text-black"
        >
          {label}
        </label>
      </div>
    );
  }
  