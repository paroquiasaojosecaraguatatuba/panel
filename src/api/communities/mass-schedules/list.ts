import { communityApi } from '@/api/utils/communityApi';

type MassScheduleTime = {
  id: string;
  scheduleId: string;
  startTime: string; // "09:00", "19:30"
  endTime: string;
};

interface ListCommunityMassSchedules {
  massSchedules: {
    id: string;
    communityId: string;
    title?: string;
    type: 'ordinary' | 'devotional' | 'solemnity';
    orientations?: string;
    isPrecept: boolean;
    recurrenceType: 'weekly' | 'monthly' | 'yearly';
    dayOfWeek?: number;
    dayOfMonth?: number;
    weekOfMonth?: number;
    monthOfYear?: number;
    active: boolean;
    startDate?: string;
    endDate?: string;
    createdAt: string;
    updatedAt?: string;
    times: MassScheduleTime[]; // Array de horários no formato "HH:MM"
  };
}

export const listCommunityMassSchedules = async ({
  communityId,
}: {
  communityId: string;
}) => {
  const result = await communityApi<ListCommunityMassSchedules>(
    `/${communityId}/mass-schedules`
  );

  return result;
};
