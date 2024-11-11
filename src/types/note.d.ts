interface Note {
  content: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  tag?: {
    text: string;
    color: TagColor | undefined;
  };
  title: string;
  folder?: string;
}