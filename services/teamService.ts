import { api } from "@/config/axios-config";
import type { TeamResponse, TeamData } from "@/type/teamType";

export const teamService = {
  /**
   * Fetch all team members
   */
  async getTeamMembers(): Promise<TeamData> {
    const response = await api.get<TeamResponse>("/our-team/get-all");
    return response.data.data;
  }
};

export default teamService;
