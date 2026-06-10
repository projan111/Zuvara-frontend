export interface TeamMember {
  id: string;
  createdAt: string;
  updatedAt: string;
  sortOrder: number;
  fullName: string;
  position: string;
  description: string | null;
  isLeader: boolean;
  coverImage: string;
}

export interface TeamData {
  teamMembers: TeamMember[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface TeamResponse {
  status: number;
  data: TeamData;
  cached: boolean;
}

