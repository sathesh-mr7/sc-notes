interface Note {
  content: string;
  createdAt: string;
  id: string;
  parent?: string | null;
  tag?: {
    text: string;
    color: TagColor;
  };
  title: string;
}