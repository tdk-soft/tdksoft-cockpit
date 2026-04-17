/**
 * Represents a single external platform/service link.
 * This model is part of the domain layer (pure TypeScript, no Angular dependency).
 * Follows SRP: only defines structure, no logic.
 */
export interface ServiceLink {
  title: string;        // Display name of the service
  description: string;  // Short description shown in UI
  url: string;          // External link
  icon: string;         // Short label (2 letters)
  cta: string;          // Call-to-action text
}