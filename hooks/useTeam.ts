import { useQuery } from "@tanstack/react-query";
import { teamService } from "@/services/teamService";

export function useTeamMembers() {
  return useQuery({
    queryKey: ["teamMembers"],
    queryFn: () => teamService.getTeamMembers(),
  });
}
