export interface AdminMessage {
  id: number;

  // Contenu du message
  title: string;
  content: string;

  // Expéditeur
  sender_name: string;
  sender_email: string;
  sender_phone?: string;

  // Cible du message
  target_type: "all" | "secteur" | "member";
  target_value?: string | number | null;

  // Statut
  status: "unread" | "read" | "archived";

  // Dates
  created_at: string;
}
