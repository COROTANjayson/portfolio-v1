// src/components/contact/contact-schema.ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honey: z.string().max(0),
});

export type ContactFormData = z.infer<typeof contactSchema>;
