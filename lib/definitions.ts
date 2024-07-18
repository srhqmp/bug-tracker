enum Severity {
  Low = "low",
  Medium = "medium",
  High = "high",
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  addedBy: string;
  updatedAt: string;
  createdAt: string;
  severity: Severity;
}
