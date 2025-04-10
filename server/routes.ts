import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema, type Contact } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
// import nodemailer from "node-mailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const contactData = contactSchema.parse(req.body);
      
      // Store contact message
      const savedContact = await storage.createContact(contactData);
      
      // Email notification could be implemented here
      // const transporter = nodemailer.createTransport({
      //   host: process.env.EMAIL_HOST,
      //   port: parseInt(process.env.EMAIL_PORT || '587'),
      //   secure: process.env.EMAIL_SECURE === 'true',
      //   auth: {
      //     user: process.env.EMAIL_USER,
      //     pass: process.env.EMAIL_PASS
      //   }
      // });
      
      // await transporter.sendMail({
      //   from: process.env.EMAIL_FROM,
      //   to: process.env.EMAIL_TO,
      //   subject: `New contact: ${contactData.subject}`,
      //   text: `Name: ${contactData.name}\nEmail: ${contactData.email}\nMessage: ${contactData.message}`,
      //   html: `<p><strong>Name:</strong> ${contactData.name}</p>
      //          <p><strong>Email:</strong> ${contactData.email}</p>
      //          <p><strong>Message:</strong> ${contactData.message}</p>`
      // });
      
      res.status(201).json({ 
        success: true, 
        message: "Contact message saved successfully",
        data: savedContact
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.details 
        });
      }
      
      console.error('Contact form error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to save contact message" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
