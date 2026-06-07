import axiosInstance from "@/lib/axios.config";

// Type definitions for Team API based on actual response
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

// API endpoint
const TEAM_ENDPOINT = "/our-team/get-all";

/**
 * Fetch all team members
 */
export const getTeamMembers = async (): Promise<TeamData> => {
  try {
    const response = await axiosInstance.get<TeamResponse>(TEAM_ENDPOINT);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching team members:", error);
    throw error;
  }
};

/**
 * Fetch a single team member by ID
 */
export const getTeamMemberById = async (id: string): Promise<TeamMember | undefined> => {
  try {
    const teamData = await getTeamMembers();
    return teamData.teamMembers.find((member) => member.id === id);
  } catch (error) {
    console.error(`Error fetching team member ${id}:`, error);
    throw error;
  }
};
