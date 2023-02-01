import { useState } from "react";



export const DinamicForm = () => {
  const [fields, setFields] = useState([
    {
      name: "",
      age: "",
    },
  ]);

  const handleChange = (index, event) => {
    const data = [...fields];
    data[index][event.target.name] = event.target.value;
    setFields(data);
  };

  const addFields = (event) => {
    event.preventDefault();
    const newField = { name: "", age: "" };
    setFields([...fields, newField]);
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(fields);
  };
  const remove = (index, event) => {
    event.preventDefault();
    const data = [...fields];
    data.splice(index, 1);
    setFields(data);
  };

  return (
    <div className="app-container">
      <form>
        {fields.map((input, index) => {
          return (
            <div key={index}>
              <input
                type="text"
                name="name"
                placeholder="name"
                value={input.name}
                onChange={(event) => handleChange(index, event)}
              />
              <input
                type="text"
                name="age"
                placeholder="age"
                value={input.age}
                onChange={(event) => handleChange(index, event)}
              />
              <button onClick={(event) => remove(index, event)}>Remove</button>
            </div>
          );
        })}
        <button onClick={addFields}>add more...</button>
      </form>
      <button onClick={submit}>Submit</button>
    </div>
  );
};
    