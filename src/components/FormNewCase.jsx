import { useState } from "react";

export const FormNewCase = () => {
  const [person, setPerson] = useState({
    name: "",
    lastName: "",
    age: 0,
  });

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={person.name}
          placeholder="name?"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          value={person.lastName}
          placeholder="last name?"
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          value={person.age}
          placeholder="your age?"
          onChange={handleChange}
        />
      </form>
      <button onClick={submit}>Submit</button>
      <div>
        <p>{`Seu nome é ${person.name} ${person.lastName} com ${person.age} anos`}</p>
      </div>
    </div>
  );
};
