import { Comment, TimelineEvent, PRMeta } from "./types";

export const prMeta: PRMeta = {
  title: "docs: fix typo in CSS selector",
  number: 6928,
  baseBranch: "shadcn-ui:main",
  compareBranch: "YordanIliev2002:main",
  author: "YordanIliev2002",
  merged: true,
  timestamp: "last month",
};

export const comments: Comment[] = [
  {
    author: "YordanIliev2002",
    content: "There was a typo",
    timestamp: "last month",
  },
  {
    author: "vercel",
    content: "is attempting to deploy a commit to the shadcn-pro Team on Vercel...",
    timestamp: "last month",
    isBot: true,
  },
];

export const timeline: TimelineEvent[] = [
  {
    type: "title-edit",
    author: "YordanIliev2002",
    description: "changed the title",
    timestamp: "last month",
  },
  {
    type: "force-push",
    author: "YordanIliev2002",
    description: "force-pushed the `main` branch",
    timestamp: "last month",
  },
  {
    type: "approval",
    author: "Jacksonmills",
    description: "approved these changes",
    timestamp: "last month",
  },
];


