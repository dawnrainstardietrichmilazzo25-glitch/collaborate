export interface MeetSpace {
  name: string; // e.g. "spaces/12345"
  meetingUri: string; // e.g. "https://meet.google.com/abc-defg-hij"
  meetingCode: string; // e.g. "abc-defg-hij"
  config?: {
    accessType?: string;
    entryPointAccess?: string;
  };
  activeConference?: {
    conferenceRecord?: string;
  };
}

export interface ResearchMeetingSession {
  id: string;
  title: string;
  topic: string;
  challengeId?: string;
  hypothesisId?: string;
  hostName: string;
  hostEmail: string;
  meetSpace: MeetSpace;
  createdAt: string;
  scheduledTime?: string;
  status: 'active' | 'scheduled' | 'concluded';
  description: string;
  attendeesCount: number;
}

export async function createGoogleMeetSpace(accessToken: string): Promise<MeetSpace> {
  const response = await fetch('https://meet.googleapis.com/v2/spaces', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('Meet API error response:', errorBody);
    throw new Error(`Google Meet API error (${response.status}): ${errorBody}`);
  }

  const data = await response.json();
  return data as MeetSpace;
}

export async function fetchGoogleMeetSpace(
  accessToken: string,
  spaceName: string
): Promise<MeetSpace> {
  const response = await fetch(`https://meet.googleapis.com/v2/${spaceName}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch Google Meet space: ${response.statusText}`);
  }

  return await response.json();
}
