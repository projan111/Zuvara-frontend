import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getTeamMembers, getTeamMemberById, TeamMember, TeamData } from "@/services/team";

/**
 * React Query hook to fetch all team members
 */
export const useTeamMembers = (): UseQueryResult<TeamData, Error> => {
  return useQuery({
    queryKey: ["team-members"],
    queryFn: getTeamMembers,
    staleTime: 1000 * 60 * 10, // Data stays fresh for 10 minutes
  });
};

/**
 * React Query hook to fetch a single team member by ID
 */
export const useTeamMember = (id: string): UseQueryResult<TeamMember | undefined, Error> => {
  return useQuery({
    queryKey: ["team-member", id],
    queryFn: () => getTeamMemberById(id),
    enabled: !!id, // Only run if ID exists
  });
};
