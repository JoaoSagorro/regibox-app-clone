'use server';

import { NextApiRequest, NextApiResponse } from "next";
import { FormEvent } from "react";


const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const formDataObject = Object.fromEntries(formData);

  
};

export default handleSubmit;
