function Input({ text,id, type, name, value, onChange,placeholder }) {
  return (
    <>
      <input
        type={type}
        value={value}
        name={name}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
