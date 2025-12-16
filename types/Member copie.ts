export interface AdminMessage {
  id: number;
  title: string;
  content: string;
  target_type: "global" | "targeted" | "member";
  target_value?: string; 
  created_at: string;
}
