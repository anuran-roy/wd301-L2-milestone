import React, { useState } from "react";
import LabelledInput from "./LabelledInput";

const formFields = [
  { id: 1, label: "First Name", fieldType: "text", value: "" },
  { id: 2, label: "Last Name", fieldType: "text", value: "" },
  { id: 3, label: "Email", fieldType: "email", value: "" },
  { id: 4, label: "Date of Birth", fieldType: "date", value: "" },
];

export default function Form(props: { closeFormCB: () => void }) {
  const [formState, setFormState] = useState(formFields);
  const [newField, setNewField] = useState("");

  const addField = () => {
    setFormState([
      ...formState,
      {
        id: Number(new Date()),
        label: newField,
        fieldType: "text",
        value: "",
      },
    ]);
    setNewField("");
  };

  const clearFields = () => {
    setFormState((oldFormState) =>
      oldFormState.map((field) => {
        return { ...field, value: "" };
      })
    );
  };
  const removeField = (id: number) => {
    setFormState(
      formState.filter((field) => {
        return field.id !== id;
      })
    );
  };

  const updateField = (e_value: string, id: number) => {
    setFormState(
      formState.map((field) => {
        if (field.id === id) {
          return {
            ...field,
            value: e_value,
          };
        }

        return field;
      })
    );
  };
  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {formState.map((field) => (
          <LabelledInput
            id={field.id}
            key={field.id}
            label={field.label}
            fieldType={field.fieldType}
            removeFieldCB={removeField}
            value={field.value}
            updateFieldCB={updateField}
          />
        ))}

        <button
          type="submit"
          // onClick={document.forms[0].submit()}
          className="btn m-4 rounded-lg bg-sky-500 py-2 px-4 font-bold text-white hover:bg-sky-700"
        >
          Submit
        </button>
        <button
          onClick={props.closeFormCB}
          className="btn m-4 rounded-lg bg-sky-500 py-2 px-4 font-bold text-white hover:bg-sky-700"
        >
          Close Form
        </button>
        <button
          onClick={clearFields}
          className="btn m-4 rounded-lg bg-sky-500 py-2 px-4 font-bold text-white hover:bg-sky-700"
        >
          Clear Form
        </button>
      </form>
      <div className="flex">
        <input
          type="text"
          className="my-2 flex-1 rounded-lg border-2 border-gray-200 p-2"
          placeholder="Enter new field name..."
          id="addFieldInput"
          value={newField}
          onChange={(e: any) => {
            e.preventDefault();
            console.log(e.target.value);
            setNewField(e.target.value);
          }}
        />
        <button
          onClick={addField}
          className="btn m-4 rounded-lg bg-sky-500 py-2 px-4 font-bold text-white hover:bg-sky-700"
        >
          Add Field
        </button>
      </div>
    </div>
  );
}
