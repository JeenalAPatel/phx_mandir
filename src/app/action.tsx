"use server";

import { z } from "zod";
import { db } from "@/db";
import { users } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const userSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email().optional().or(z.string().max(0)),
    cellPhone: z.string().max(13).optional(),
    addressLine1: z.string().optional(),
    addressLine2: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    zipCode: z.string().optional(),
  })
  .refine(
    (data) => {
      if (
        data.cellPhone ||
        data.email ||
        (data.addressLine1 && data.city && data.state && data.zipCode)
      ) {
        return true;
      }

      return false;
    },
    {
      message:
        "You must provide either an email or a cell phone number or an address",
    },
  );

export async function insertUserData(prevState: string, formdata: FormData) {
  const validationData = userSchema.safeParse(
    Object.fromEntries(formdata.entries()),
  );
  if (!validationData.success) {
    return "Please enter your First Name and Last Name along with at least one of the following: Email, Cell Phone, or Address";
  }

  await db.insert(users).values(validationData.data);

  revalidatePath("/");
  redirect("/");
}
