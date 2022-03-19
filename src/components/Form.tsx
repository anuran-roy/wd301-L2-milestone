import React, { useState } from "react";
import LabelledInput from "./LabelledInput";

const formFields = [
  { id: 1, label: "First Name", fieldType: "text", value: "default" },
  { id: 2, label: "Last Name", fieldType: "text", value: "default" },
  { id: 3, label: "Email", fieldType: "email", value: "default" },
  { id: 4, label: "Date of Birth", fieldType: "date", value: "default" },
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
        value: "default",
      },
    ]);
    setNewField("New Value");
  };

  const clearForm = (e: any) => {
    e.preventDefault();

    // console.log(
    //   `Original value of value=${formState.map((field) => field.value)}`
    // );
    Array.from(document.querySelectorAll("input")).map((field: any) => {
      field.value = "";
      return field;
    });

    setFormState(
      formState.map((field) => {
        field.value = "";
        return field;
      })
    );
    // console.log(
    //   `Changed value of value=${formState.map((field) => field.value)}`
    // );
  };

  const removeField = (id: number) => {
    setFormState(
      formState.filter((field) => {
        return field.id !== id;
      })
    );
  };

  return (
    <div className="flex flex-col items-center">
      <form>
        {formState.map((field) => (
          <LabelledInput
            id={field.id}
            key={field.id}
            label={field.label}
            fieldType={field.fieldType}
            removeFieldCB={removeField}
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
          onClick={clearForm}
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
