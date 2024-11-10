interface Note {
  content: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  parent?: string | null;
  tag?: {
    text: string;
    color: TagColor | undefined;
  };
  title: string;
  folder?: string;
}