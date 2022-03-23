// import React, { useState } from "react";

export default function LabelledInput(props: {
  id: number;
  label: string;
  fieldType: string;
  value: string;
  removeFieldCB: (id: number) => void;
  // InputFieldState: any;
  updateFieldCB: (e: any, id: number) => any;
}) {
  return (
    <>
      <label>{props.label}</label>
      <div className="flex">
        <input
          id={`${props.id}`}
          className="my-2 flex-1 rounded-lg border-2 border-gray-200 p-2"
          type={props.fieldType}
          autoComplete="true"
          value={props.value}
          onChange={(e: any) => {
            props.updateFieldCB(e.target.value, props.id);
            // props.InputFieldState[props.id].value = e.target.value;
          }}
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
