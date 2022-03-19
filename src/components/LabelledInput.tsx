import React from "react";

export default function LabelledInput(props: {
  id: number;
  label: string;
  fieldType: string;
  removeFieldCB: (id: number) => void;
}) {
  return (
    <>
      <label>{props.label}</label>
      <div className="flex">
        <input
          id={`field-${props.id}`}
          className="my-2 flex-1 rounded-lg border-2 border-gray-200 p-2"
          type={props.fieldType}
          autoComplete="true"
          // onChange={}
        />
        <button
          onClick={(_) => props.removeFieldCB(props.id)}
          className="btn m-4 rounded-lg bg-sky-500 py-2 px-4 font-bold text-white hover:bg-sky-700"
        >
          Remove
        </button>
      </div>
    </>
  );
}
