export type Doc<T extends keyof DocCollection> = DocCollection[T];

export interface DocCollection {
  applications: {
    _id: string;
    _creationTime: number;
    jobId: string;
    userId: string;
    status: "applied" | "screening" | "interviewing" | "offer" | "accepted" | "rejected" | "withdrawn";
    appliedAt: number;
    notes?: string;
    interviewNotes?: string;
    resumeVersion?: string;
    attachments?: string[];
    lastFollowUpAt?: number;
    followUpReminderDays?: number;
  };
  companies: {
    _id: string;
    _creationTime: number;
    name: string;
    website?: string;
    industry?: string;
    createdAt: number;
  };
  jobs: {
    _id: string;
    _creationTime: number;
    title: string;
    companyId: string;
    location?: string;
    salary?: string;
    jobUrl?: string;
    description?: string;
    createdAt: number;
  };
  sessions: {
    _id: string;
    _creationTime: number;
    sessionToken: string;
    userId: string;
    expires: number;
  };
  users: {
    _id: string;
    _creationTime: number;
    email: string;
    name?: string;
    createdAt: number;
  };
}