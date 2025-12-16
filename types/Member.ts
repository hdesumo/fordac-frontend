export interface Member {
  id: number;
  name: string;
  email: string;
  phone: string;
  membership_level?: string;
  departement?: string;
  secteur?: string;
  arrondissement?: string;
  quartier?: string;
  status?: string;
  created_at?: string;
  birthdate?: string;
  profession?: string;
  terms_accepted?: boolean;
}
