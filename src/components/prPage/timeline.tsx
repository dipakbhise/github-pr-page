// components/Timeline.tsx
// import { FaComment, FaCheckCircle, FaRocket, FaCodeBranch } from "react-icons/fa";
// import { BsGit } from "react-icons/bs";

import {
  ApproveIcon,
  CommitIcon,
  DeployedIcon,
  EditIcon,
  EmojiIcon,
  ForcePushIcon,
  LabelIcon,
  MergeIcon,
  ThreeDotIcon,
} from "../../utils/icons";
import { DeploymentsTable } from "./deploymentsTable";

const events = [
  {
    type: "comment",
    user: "YordanIliev2002",
    avatar: "https://avatars.githubusercontent.com/u/15782156?s=60&v=4",
    content: "There was a typo",
    timestamp: "last month",
    bg: "bg-[#f6f8fa]",
    userType: "Contributor",
  },
  {
    type: "comment",
    user: "Vercel",
    avatar: "https://avatars.githubusercontent.com/in/8329?s=80&v=4",
    content: `
    <td class="d-block comment-body markdown-body js-comment-body">
      <p dir="auto">
        <a class="user-mention notranslate" href="https://github.com/YordanIliev2002">
          @YordanIliev2002
        </a> is attempting to deploy a commit to the <strong>shadcn-pro</strong> Team on 
        <a href="https://vercel.com" rel="nofollow">Vercel</a>.
      </p>
      <p dir="auto">
        A member of the Team first needs to 
        <a href="https://vercel.com/git/authorize?team=shadcn-pro&amp;type=github..." rel="nofollow">
          authorize it
        </a>.
      </p>
    </td>`,
    timestamp: "last month",
    bg: "bg-[#f6f8fa]",
    userType: "bot",
  },
  {
    type: "edit",
    content: `
    <div class="flex">
      <a class="rounded" href="/YordanIliev2002">
        <img class="rounded-full mr-1" src="https://avatars.githubusercontent.com/u/15782156?s=40&amp;v=4" width="20" height="20" alt="@YordanIliev2002" />
      </a>
      <a class="author Link--primary text-bold" href="/YordanIliev2002">YordanIliev2002</a>
      changed the title
      <del class="text-bold markdown-title">Fix css selector for Zinc theme in website</del>
      <ins class="text-bold markdown-title no-underline">docs: typo in CSS selector</ins>
      <a href="#event-16777509570" class="Link--secondary">
        <relative-time datetime="2025-03-14T16:36:01Z" title="Mar 14, 2025">Mar 14, 2025</relative-time>
      </a>
    </div>
  `,
    timestamp: "last month",
    avatar: "https://avatars.githubusercontent.com/u/15782156?s=60&v=4",
    bg: "bg-[#f6f8fa]",
    oldChange: "title Fix css selector for Zinc theme in website",
    newChanges: "docs: typo in CSS selector",
  },
  {
    type: "commit",
    content: `
    <div class="flex">
      <a class="avatar avatar-user" href="/YordanIliev2002">
        <img class="rounded-full mr-1" src="https://avatars.githubusercontent.com/u/15782156?s=40&amp;v=4" width="20" height="20" alt="@YordanIliev2002" />
      </a>
      <div class="pr-1 flex-auto min-width-0">
        <code>
          <a title="docs: fix typo in CSS selector" class="Link--secondary markdown-title" href="/shadcn-ui/ui/pull/6928/commits/5a7285763616b397bf736ea84b2d38b237b3da18">
            docs: fix typo in CSS selector
          </a>
        </code>
      </div>
      <div class="text-right ml-1">
        <code>
          <a href="/shadcn-ui/ui/pull/6928/commits/5a7285763616b397bf736ea84b2d38b237b3da18" class="Link--secondary">
            5a72857
          </a>
        </code>
      </div>
    </div>
  `,
    timestamp: "last month",
    avatar: "https://avatars.githubusercontent.com/u/15782156?s=60&v=4",
    bg: "bg-[#f6f8fa]",
    oldChange: "title Fix css selector for Zinc theme in website",
    newChanges: "docs: typo in CSS selector",
  },
  {
    type: "edit",
    content:`<div class="flex">
    <a href="/YordanIliev2002">
      <img class="rounded-full mr-1"
        src="https://avatars.githubusercontent.com/u/15782156?s=40&u=69b8f091a6a7499450bb94a9a1452bba54356da6&v=4"
        width="20"
        height="20"
        alt="@YordanIliev2002"
      />
    </a>
  
    <a href="/YordanIliev2002">YordanIliev2002</a> changed the title
  
    <del>docs: typo in CSS selector</del>
    <ins>docs: fix typo in CSS selector</ins>
  
    <a href="#event-16777547531">
      <time datetime="2025-03-14T16:38:41Z" title="Mar 14, 2025, 10:08 PM GMT+5:30">
        Mar 14, 2025
      </time>
    </a>
  </div>
  `,
    timestamp: "last month",
    avatar: "https://avatars.githubusercontent.com/u/15782156?s=60&v=4",
    bg: "bg-[#f6f8fa]",
    oldChange: "title Fix css selector for Zinc theme in website",
    newChanges: "docs: typo in CSS selector",
  },
  {
    type: "force-push",
    content: `<div class="flex">
    <a href="/YordanIliev2002">
      <img class="rounded-full mr-1"
        src="https://avatars.githubusercontent.com/u/15782156?s=40&u=69b8f091a6a7499450bb94a9a1452bba54356da6&v=4"
        width="20"
        height="20"
        alt="@YordanIliev2002"
      />
    </a>
  
    <a href="/YordanIliev2002">YordanIliev2002</a>
  
    <a href="/shadcn-ui/ui/compare/26c11499e13a5b32cbc9721b792fb8a25c12e728..5a7285763616b397bf736ea84b2d38b237b3da18">
      force-pushed
    </a>
    the
    <span>main</span>
    branch from
    <a href="/shadcn-ui/ui/commit/26c11499e13a5b32cbc9721b792fb8a25c12e728">
      <code>26c1149</code>
    </a>
    to
    <a href="/shadcn-ui/ui/commit/5a7285763616b397bf736ea84b2d38b237b3da18">
      <code>5a72857</code>
    </a>
  
    <a href="/shadcn-ui/ui/compare/26c11499e13a5b32cbc9721b792fb8a25c12e728..5a7285763616b397bf736ea84b2d38b237b3da18">
      <span>Compare</span>
    </a>
  
    <a href="#event-16777550123">
      <time datetime="2025-03-14T16:38:55Z" title="Mar 14, 2025, 10:08 PM GMT+5:30">
        March 14, 2025 16:38
      </time>
    </a>
  </div>
  `,
    timestamp: "last month",
    avatar: "https://avatars.githubusercontent.com/u/15782156?s=60&v=4",
    bg: "bg-[#f6f8fa]",
  },
  {
    type: "approval",
    content: "approved these changes",
    timestamp: "last month",
    avatar: "https://avatars.githubusercontent.com/u/15782156?s=60&v=4",
    bg: "bg-[#f6f8fa]",
  },
  {
    type: "approval",
    content: "approved these changes",
    timestamp: "last month",
    avatar: "https://avatars.githubusercontent.com/u/15782156?s=60&v=4",
    bg: "bg-[#f6f8fa]",
  },
  {
    type: "approve-with-comment",
    content: "kodiakhq approved these changes with comment",
    timestamp: "last month",
    avatar: "/user1.jpg",
    bg: "bg-[#1f883d]",
    user: "shadcn",
    userType: "Collaborator",
  },
  {
    type: "comment",
    user: "YordanIliev2002",
    avatar: "https://avatars.githubusercontent.com/u/15782156?s=60&v=4",
    content: <DeploymentsTable />,
    timestamp: "last month",
    bg: "bg-[#f6f8fa]",
    dataType: "table",
  },
  {
    type: "deploy",
    content: "vercel bot deployed to Preview – ui",
    timestamp: "last month",
    avatar: "/user1.jpg",
    bg: "bg-[#f6f8fa]",
  },
  {
    type: "add-label",
    content: "vercel bot deployed to Preview – ui",
    timestamp: "last month",
    avatar: "/user1.jpg",
    bg: "bg-[#f6f8fa]",
  },
  {
    type: "deploy",
    content: "vercel bot deployed to Preview – ui",
    timestamp: "last month",
    avatar: "/user1.jpg",
    bg: "bg-[#f6f8fa]",
  },
  {
    type: "merge",
    content: "kodiakhq bot merged commit 61e21e3 into shadcn-ui:main",
    timestamp: "last month",
    avatar: "/user1.jpg",
    bg: "bg-[#8250df]",
  },
];

const iconMap: Record<string, JSX.Element> = {
  comment: "icon",
  "force-push": <ForcePushIcon />,
  approval: <ApproveIcon />,
  deploy: <DeployedIcon />,
  merge: <MergeIcon />,
  edit: <EditIcon />,
  commit: <CommitIcon />,
  "approve-with-comment": <ApproveIcon fill="white" />,
  "add-label": <LabelIcon />,
};

export const Timeline = () => {
  return (
    <div className="relative pl-8 border-l-2 border-transparent space-y-8">
      {events.map((event, index) => (
        <div
          key={index}
          className={`relative flex items-start ${
            events.length === index + 1 && "mb-0"
          }`}
        >
          {/* Timeline indicator */}

          {event.type === "comment" || event.type === "approval" ? (
            <>
              <div
                className={`absolute -left-[54px] ${
                  event.type === "approval" ? "-top-[10px]" : "top-0"
                }  z-10 w-fit`}
              >
                {event.userType === "bot" ? (
                  <div className="relative ">
                    {/* First Avatar */}
                    <img
                      src={event?.avatar}
                      alt="avatar"
                      className="w-10 h-10 rounded-md  shadow-md"
                    />

                    {/* Second Avatar - bottom right of the first */}
                    <img
                      src={event?.avatar}
                      alt="avatar"
                      className="w-5 h-5 rounded-md  shadow-md absolute -bottom-1 -right-1"
                    />
                  </div>
                ) : (
                  <img
                    src={event?.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                  />
                )}
              </div>
              {event.type === "approval" && (
                <div className="absolute left-[4px] top-0 z-10">
                  <div className="w-4 h-4 shadow-md flex items-center justify-center ">
                    <span className={`${event.bg} p-2 rounded-full`}>
                      {iconMap[event.type]}
                    </span>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="absolute left-[4px] top-0 z-10">
              <div className="w-4 h-4  shadow-md flex items-center justify-center">
                <span className={`${event.bg} p-2 rounded-full`}>
                  {iconMap[event.type]}
                </span>
              </div>
            </div>
          )}

          {/* Vertical line */}
          <div
            className={`absolute left-[0.675rem] ${
              events.length != index + 1 && "top-[30px]"
            } w-px h-full bg-gray-300 dark:bg-neutral-700`}
          />

          {/* Content */}
          <div className="w-[100%]">
            {event.type === "comment" ? (
              <div className="relative border border-[#d1d9e0] bg-white dark:bg-neutral-800 text-sm rounded-lg shadow-sm">
                {/* Triangle Border Layer */}
                <div
                  className="absolute left-[-9px] top-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8"
                  style={{ borderRightColor: "#d1d9e0" }}
                />

                {/* Triangle Inner (fills in the triangle with same bg as header) */}
                <div className="absolute left-[-8px] top-3 w-0 h-0 border-t-[8px] border-t-transparent border-b-7 border-b-transparent border-r-[9px] border-r-gray-100 " />

                {/* Top Section */}
                <div className="bg-gray-100  p-3 rounded-t-lg flex justify-between">
                  <div className="  dark:text-white mb-1">
                    <span className="text-[#1f2328] font-semibold ">
                      {event.user} &nbsp;
                    </span>
                    {event?.userType === "bot" ? (
                      <span className="border-[#d1d9e0] border-1 rounded-full px-2 font-semibold">
                        {event?.userType}
                      </span>
                    ) : null}{" "}
                    <span className="text-[#59636e] font-[400]">
                      commented {event.timestamp}
                    </span>
                  </div>
                  <div className="flex items-center">
                    {event?.userType ? (
                      <span className="border-[#d1d9e0] border-1 rounded-full px-2 font-semibold">
                        {event?.userType}
                      </span>
                    ) : null}
                    <span className="ml-2">
                      <ThreeDotIcon />
                    </span>
                  </div>
                </div>

                {/* Bottom Content Section */}
                <div className="p-3 bg-white dark:bg-neutral-800 rounded-b-lg">
                  {event?.dataType === "table" ? (
                    <p className="text-[#1f2328] dark:text-neutral-300 py-2">
                      {" "}
                      {event.content}
                    </p>
                  ) : (
                    <p
                      className="text-[#1f2328] dark:text-neutral-300 py-2"
                      dangerouslySetInnerHTML={{ __html: event.content }}
                    />
                  )}
                  <div className="text-xs text-gray-400 mt-1 flex">
                    <span className="border border-[#d1d9e0b3] p-1 rounded-full bg-[#f6f8fa]">
                      <EmojiIcon />
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="text-sm text-[#1f2328] dark:text-neutral-300 ml-10 h-[50px]"
                dangerouslySetInnerHTML={{ __html: event.content }}
              />
            )}
            {event.type === "approve-with-comment" ? (
              <div className="relative border border-[#d1d9e0] bg-white dark:bg-neutral-800 text-sm rounded-lg shadow-sm mt-4 ml-[-8px]">
                {/* Triangle border layer */}
                <div
                  className="absolute top-[-10px] left-[8px] w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent"
                  style={{ borderBottomColor: "#d1d9e0" }}
                />

                {/* Triangle inner layer */}
                <div
                  className="absolute -top-[8px] left-[10px] w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent"
                  style={{ borderBottomColor: "#f6f8fa" }} // match header background
                />

                {/* Top Section */}
                <div className="bg-[#f6f8fa] dark:bg-neutral-800 p-3 rounded-t-lg flex justify-between">
                  <div className="font-medium text-gray-900 dark:text-white mb-1">
                    @{event.user} left a comment
                  </div>
                  <div className="flex items-center">
                    {event?.userType ? (
                      <span className="border-[#d1d9e0] border-1 rounded-full px-2 font-semibold">
                        {event?.userType}
                      </span>
                    ) : null}
                    <span className="ml-2">
                      <ThreeDotIcon />
                    </span>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="p-3 bg-white dark:bg-neutral-800 rounded-b-lg">
                  <p
                    className="text-[#1f2328] dark:text-neutral-300"
                    dangerouslySetInnerHTML={{ __html: event.content }}
                  />
                  <div className="text-xs text-gray-400 mt-1">
                    {event.timestamp}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ))}
      <div className="w-[100%] bg-[#d1d9e0] h-1"></div>

      <div className="w-[100%] text-sm">
        <div
          className="border rounded-lg shadow-sm p-4  text-gray-800"
          style={{ borderColor: "#8250df" }}
        >
          <div className="font-medium text-[#8250df] mb-1">
            Pull request successfully merged and closed
          </div>
          <div className="text-sm text-gray-600">
            You&apos;re all set — the branch has been merged.
          </div>
        </div>
      </div>
    </div>
  );
};
