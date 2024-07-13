"use client";

import { ChangeEvent, FormEvent, FormEventHandler, useState } from "react";
import { useQueryParams } from "../hooks/useQueryParams";
import { Button } from "./button";

export const Form = ({
  label,
  searchKey,
  initQuery,
}: {
  label: string;
  searchKey: string;
  initQuery: string;
}) => {
  const [value, setValue] = useState(initQuery);
  const [setQueryParams] = useQueryParams();

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQueryParams(searchKey, value);
  };

  return (
    <form
      className="w-max-[50%] w-[50%] flex flex-col gap-3 justify-center items-center"
      onSubmit={handleOnSubmit}
    >
      <label>{label}</label>
      <input
        placeholder="Pass the id here"
        className="border-gray-500 w-full border rounded px-2 py-1"
        onChange={handleOnChange}
        defaultValue={value}
      />
      <Button>Submit</Button>
    </form>
  );
};
