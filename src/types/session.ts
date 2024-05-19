export interface ISession {
  _id: string;
  url: string;
  metadata: {
    icon: string;
    title: string;
    description?: string | null;
  };
  createdAt: string;
}
