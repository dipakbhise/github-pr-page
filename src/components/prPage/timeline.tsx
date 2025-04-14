

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
import SignupCard from "../common/signUpCard";
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
      <p dir="auto" class="mb-4">
        <a class="text-[#1f2328] dark:text-white font-bold border-b-1" href="https://github.com/YordanIliev2002">
          @YordanIliev2002
        </a> is attempting to deploy a commit to the <strong>shadcn-pro</strong> Team on 
        <a href="https://vercel.com" rel="nofollow" class="text-[#0969da] border-b-1">Vercel</a>.
      </p>
      <p dir="auto" class="text-[#1f2328] text-[14px] dark:text-white">
        A member of the Team first needs to 
        <a class="text-[#0969da] border-b-1" href="https://vercel.com/git/authorize?team=shadcn-pro&amp;type=github..." rel="nofollow">
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
    <div class="flex flex-wrap">
      <a class="rounded" href="/YordanIliev2002">
        <img class="rounded-full mr-1" src="https://avatars.githubusercontent.com/u/15782156?s=40&amp;v=4" width="20" height="20" alt="@YordanIliev2002" />
      </a>
      <a class="text-[#59636e] dark:text-white font-bold" href="/YordanIliev2002">YordanIliev2002</a> &nbsp;
       changed the title &nbsp;
      <del class="font-bold text-[#59636e]">Fix css selector for Zinc theme in website</del>
      <ins class="font-bold text-[#59636e]  no-underline">docs: typo in CSS selector on &nbsp;</ins>
      <a href="#event-16777509570" class="Link--secondary">
        <relative-time class="text-[#59636e]" datetime="2025-03-14T16:36:01Z" title="Mar 14, 2025"> Mar 14, 2025</relative-time>
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
    <div class="flex flex-wrap">
      <a class="avatar avatar-user" href="/YordanIliev2002">
        <img class="rounded-full mr-1" src="https://avatars.githubusercontent.com/u/15782156?s=40&amp;v=4" width="20" height="20" alt="@YordanIliev2002" />
      </a>
      <div class="pr-1 flex-auto min-width-0">
        <code>
          <a class="text-[#59636e] dark:text-white" title="docs: fix typo in CSS selector" class="Link--secondary " href="/shadcn-ui/ui/pull/6928/commits/5a7285763616b397bf736ea84b2d38b237b3da18">
            docs: fix typo in CSS selector
          </a>
        </code>
      </div>
      <div class="text-right ml-1 flex">
        <code class="flex">
        <span class="mr-1"><svg aria-label="6 / 7 checks OK" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" fill="#1a7f37">
        <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></span>
          <a href="/shadcn-ui/ui/pull/6928/commits/5a7285763616b397bf736ea84b2d38b237b3da18" class=" text-[#59636e] hover:underline">
      </svg> 5a72857
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
    content:`<div class="flex flex-wrap">
    <a class="rounded" href="/YordanIliev2002">
      <img class="rounded-full mr-1" src="https://avatars.githubusercontent.com/u/15782156?s=40&amp;v=4" width="20" height="20" alt="@YordanIliev2002" />
    </a>
    <a class="text-[#59636e] dark:text-white font-bold" href="/YordanIliev2002">YordanIliev2002</a> &nbsp;
     changed the title &nbsp;
    <del class="font-bold text-[#59636e]">docs: typo in CSS selector</del>
    <ins class="font-bold text-[#59636e]  no-underline">docs: fix typo in CSS selector on &nbsp;</ins>
    <a href="#event-16777509570" class="Link--secondary">
      <relative-time class="text-[#59636e]" datetime="2025-03-14T16:36:01Z" title="Mar 14, 2025"> Mar 14, 2025</relative-time>
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
    content: `<div class="flex justify-between w-full flex-wrap">
    <div class="flex">
    <a href="/YordanIliev2002">
      <img class="rounded-full mr-1"
        src="https://avatars.githubusercontent.com/u/15782156?s=40&u=69b8f091a6a7499450bb94a9a1452bba54356da6&v=4"
        width="20"
        height="20"
        alt="@YordanIliev2002"
      />
    </a>
  
    <a href="/YordanIliev2002" class="text-[#59636e] dark:text-white font-bold">YordanIliev2002</a>
   &nbsp;
    <a class="text-[#59636e] dark:text-white border-b-1" href="/shadcn-ui/ui/compare/26c11499e13a5b32cbc9721b792fb8a25c12e728..5a7285763616b397bf736ea84b2d38b237b3da18">
      force-pushed
    </a>
    &nbsp;the&nbsp;<span class="bg-[#ddf4ff] rounded-s px-1  dark:text-[#59636e]">main</span>&nbsp;branch from&nbsp;
    <a class="font-bold text-[#59636e]" href="/shadcn-ui/ui/commit/26c11499e13a5b32cbc9721b792fb8a25c12e728">
      <code>26c1149</code>
    </a>
    &nbsp;to&nbsp;
    <a class="font-bold text-[#59636e]" href="/shadcn-ui/ui/commit/5a7285763616b397bf736ea84b2d38b237b3da18">
      <code>5a72857</code>
    </a>
    &nbsp;last month
    </div>
  
    <div>
    <a  href="/shadcn-ui/ui/compare/26c11499e13a5b32cbc9721b792fb8a25c12e728..5a7285763616b397bf736ea84b2d38b237b3da18">
      <span class="text-[#25292e] hover:bg-[#818b981a] py-1 px-2 rounded-md dark:text-white">Compare</span>
    </a>&nbsp;
    </div>
  
  </div>
  `,
    timestamp: "last month",
    avatar: "https://avatars.githubusercontent.com/u/15782156?s=60&v=4",
    bg: "bg-[#f6f8fa]",
  },
  {
    type: "approval",
    content: `<div class="flex justify-between w-full flex-wrap">
    <div><a href="/YordanIliev2002" class="text-[#59636e] dark:text-white font-bold">Jacksonmills </a> approved these changes on Mar 15</div>
    <div>
    <a  href="/shadcn-ui/ui/compare/26c11499e13a5b32cbc9721b792fb8a25c12e728..5a7285763616b397bf736ea84b2d38b237b3da18">
      <span class="text-[#25292e] hover:bg-[#818b981a] py-1 px-2 rounded-md dark:text-white">View reviewed changes</span>
    </a>&nbsp;
    </div>
    </div>`,
    timestamp: "last month",
    avatar: "https://avatars.githubusercontent.com/u/19780885?s=60&v=4",
    bg: "bg-[#f6f8fa]",
  },
  {
    type: "approval",
    content: `<div class="flex justify-between w-full flex-wrap">
    <div><a href="/YordanIliev2002" class="text-[#59636e] dark:text-white font-bold">matevegh </a> approved these changes last month</div>
    <div>
    <a  href="/shadcn-ui/ui/compare/26c11499e13a5b32cbc9721b792fb8a25c12e728..5a7285763616b397bf736ea84b2d38b237b3da18">
      <span class="text-[#25292e] hover:bg-[#818b981a] py-1 px-2 rounded-md dark:text-white">View reviewed changes</span>
    </a>&nbsp;
    </div>
    </div>`,
    timestamp: "last month",
    avatar: "https://avatars.githubusercontent.com/u/30011773?s=60&v=4",
    bg: "bg-[#f6f8fa]",
  },
  {
    type: "approve-with-comment",
    content: `<div class="flex justify-between w-full">
    <div><a href="/YordanIliev2002" class="text-[#59636e] dark:text-white font-bold">shadcn </a> approved these changes last month</div>
    <div>
    <a  href="/shadcn-ui/ui/compare/26c11499e13a5b32cbc9721b792fb8a25c12e728..5a7285763616b397bf736ea84b2d38b237b3da18">
      <span class="text-[#25292e] hover:bg-[#818b981a] py-1 px-2 rounded-md dark:text-white">View reviewed changes</span>
    </a>&nbsp;
    </div>
    </div>`,
    timestamp: "last month",
    avatar: "	https://avatars.githubusercontent.com/u/124599?s=60&v=4",
    bg: "bg-[#1f883d]",
    user: "shadcn",
    userType: "Collaborator",
    comment:"Thank you"
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
    content: `<div class="flex justify-between w-full flex-wrap">
    <div class="flex">
    <a href="/apps/vercel">
      <img
        src="https://avatars.githubusercontent.com/in/8329?s=40&v=4"
        width="20"
        height="20"
        alt="@vercel"
        class="rounded-full mr-1"
      />
    </a>
  
    <a href="/apps/vercel" class="text-[#59636e] dark:text-white font-bold">vercel</a>
    <span class="border-[#d1d9e0] border-1 rounded-full px-2 font-semibold dark:text-[#1f2328] mx-1 dark:text-white">bot</span>
  
    <a href="https://ui-8haywbxtv-shadcn-pro.vercel.app" target="_blank" rel="noopener noreferrer" class="text-[#59636e] mx-1 dark:text-white">
      deployed
    </a>
    to
    <a href="https://ui-8haywbxtv-shadcn-pro.vercel.app" target="_blank" rel="noopener noreferrer" class="text-[#1f2328] mx-1 font-bold dark:text-white">
      Preview – ui
    </a>
  
    <a href="#event-16799800356" class="text-[#59636e] mx-1 dark:text-white">
      <time datetime="2025-03-17T10:46:16Z" title="Mar 17, 2025, 4:16 PM GMT+5:30">
        last month
      </time>
    </a>

    </div>

    <div>
  
    <a href="https://ui-8haywbxtv-shadcn-pro.vercel.app" target="_blank" rel="noopener noreferrer" >
    <span class="text-[#25292e] hover:bg-[#818b981a] py-1 px-2 rounded-md bg-[#f6f8fa] border-1 border-[#d1d9e0] dark:hover:bg-[#babcbd]">View deployment</span>
      
    </a>
    </div>
  </div>`,
    timestamp: "last month",
    avatar: "/user1.jpg",
    bg: "bg-[#f6f8fa]",
  },
  {
    type: "add-label",
    content: `<div class="flex flex-wrap">
    <a href="/shadcn">
      <img class="rounded-full mr-1"
        src="https://avatars.githubusercontent.com/u/124599?s=40&u=af69b5608ec2a165471a2fd310d94c1bea60aebe&v=4"
        width="20"
        height="20"
        alt="@shadcn"
      />
    </a>
  
    <a href="/shadcn" class="text-[#59636e] dark:text-white font-bold mr-1">shadcn</a> added the
  
    <a href="/shadcn-ui/ui/labels/automerge" class="bg-[#0e8a16] mx-1 px-2  rounded-full text-white">automerge</a> label
  
    <a href="#event-16799824031">
      <time datetime="2025-03-17T10:47:36Z" title="Mar 17, 2025, 4:17 PM GMT+5:30" class="text-[#59636e] dark:text-white ml-1">
        last month
      </time>
    </a>
  </div>
  `,
    timestamp: "last month",
    avatar: "/user1.jpg",
    bg: "bg-[#f6f8fa]",
  },
  {
    type: "deploy",
    content: `<div class="flex justify-between w-full flex-wrap">
    <div class="flex">
    <a href="/apps/vercel">
      <img
        src="https://avatars.githubusercontent.com/in/8329?s=40&v=4"
        width="20"
        height="20"
        alt="@vercel"
        class="rounded-full mr-1"
      />
    </a>
  
    <a href="/apps/vercel" class="text-[#59636e] dark:text-white font-bold">vercel</a>
    <span class="border-[#d1d9e0] border-1 rounded-full px-2 font-semibold dark:text-[#1f2328] mx-1 dark:text-white">bot</span>
  
    <a href="https://ui-8haywbxtv-shadcn-pro.vercel.app" target="_blank" rel="noopener noreferrer" class="text-[#59636e] mx-1 dark:text-white">
      deployed
    </a>
    to
    <a href="https://ui-8haywbxtv-shadcn-pro.vercel.app" target="_blank" rel="noopener noreferrer" class="text-[#1f2328] mx-1 font-bold dark:text-white">
      Preview – v4
    </a>
  
    <a href="#event-16799800356" class="text-[#59636e] mx-1 dark:text-white">
      <time datetime="2025-03-17T10:46:16Z" title="Mar 17, 2025, 4:16 PM GMT+5:30">
        last month
      </time>
    </a>

    </div>

    <div>
  
    <a href="https://ui-8haywbxtv-shadcn-pro.vercel.app" target="_blank" rel="noopener noreferrer" >
    <span class="text-[#25292e] hover:bg-[#818b981a] py-1 px-2 rounded-md bg-[#f6f8fa] border-1 border-[#d1d9e0] dark:hover:bg-[#babcbd]">View deployment</span>
      
    </a>
    </div>
  </div>`,
    timestamp: "last month",
    avatar: "/user1.jpg",
    bg: "bg-[#f6f8fa]",
  },
  {
    type: "merge",
    content: `<div >
    <div class="flex justify-between w-full flex-wrap">

    <div class="flex ">
  
    <div class="flex">
    <a href="/apps/kodiakhq">
      <img
        src="https://avatars.githubusercontent.com/in/29196?s=40&v=4"
        width="20"
        height="20"
        alt="@kodiakhq"
      />
    </a>
  
    <a href="/apps/kodiakhq" class="text-[#59636e] dark:text-white font-bold ml-1">kodiakhq</a> <span class="mx-1 border-[#d1d9e0] border-1 rounded-full px-2 font-semibold dark:text-[#1f2328] dark:text-white">bot</span>
  
    <span class="text-[#59636e] mx-1 dark:text-white">merged commit</span>
    <a href="/shadcn-ui/ui/commit/61e21e33568eaf6e0f024f87fc6e10597eed3b4e">
      <code class="text-[#1f2328] mr-1 font-bold dark:text-white">61e21e3</code>
    </a>
    into
    <span class="bg-[#ddf4ff] rounded-s px-1 mx-1"><span class="text-[#0969da]">shadcn-ui</span><span class="dark:text-[#59636e]">:main</span></span>
  
    <a href="https://github.com/shadcn-ui/ui/pull/6928#event-16800489510" class="text-[#59636e] mx-1 dark:text-white">
      <time datetime="2025-03-17T11:29:20Z" title="Mar 17, 2025, 4:59 PM GMT+5:30">
        last month
      </time>
    </a>
    </div>
    </div>

    <div>
  
    <a href="https://ui-8haywbxtv-shadcn-pro.vercel.app" target="_blank" rel="noopener noreferrer" >
    <span class="text-[#25292e] hover:bg-[#818b981a] py-1 px-2 rounded-md bg-[#f6f8fa] border-1 border-[#d1d9e0] dark:hover:bg-[#babcbd]">View details</span>
      
    </a>
    </div>

    </div>
  
    <div class="text-[#59636e] text-[12px]">7 checks passed</div>
  
    <div>

    </div>
  </div>
  `,
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

          {event.type === "comment" || event.type === "approval" || event.type === "approve-with-comment" ? (
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
                      className="w-10 h-10 rounded-md  shadow-md dark:border-white border-1"
                    />

                    {/* Second Avatar - bottom right of the first */}
                    <img
                      src={event?.avatar}
                      alt="avatar"
                      className="w-5 h-5 rounded-md  shadow-md absolute -bottom-1 -right-1 dark:border-white border-1"
                    />
                  </div>
                ) : (
                  <img
                    src={event?.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border-1 border-white shadow-md"
                  />
                )}
              </div>
              {(event.type === "approval"  ||  event.type === "approve-with-comment") && (
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
                      <span className="border-[#d1d9e0] border-1 rounded-full px-2 font-semibold dark:text-[#1f2328]">
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
                <div className="bg-[#f6f8fa] dark:bg-white p-3 rounded-t-lg flex justify-between">
                  <div className="font-medium text-gray-900 dark:text-gray-900 mb-1">
                    <span className="font-bold">{event.user}</span> left a comment
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
                    dangerouslySetInnerHTML={{ __html: event?.comment }}
                  />

                  <div className="flex mt-4">
                  <div className="text-xs text-gray-400 mt-1 flex mr-2">
                    <span className="border border-[#d1d9e0b3] p-1 rounded-full bg-[#f6f8fa]">
                      <EmojiIcon />
                    </span>
                  </div>

                  <div className="text-xs text-gray-400 mt-1 flex border border-[#d1d9e0b3] p-1 rounded-full  px-2">
                    <span className="">
                    ❤️
                    </span>
                    <span className="ml-2 text-[#59636e]">2</span>
                  </div>

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
          <h3 className="text-[16px] text-[#1f2328] mb-1 font-bold dark:text-white">
            Pull request successfully merged and closed
          </h3>
          <div className="text-sm text-[#59636e] font-medium">
            You&apos;re all set — the branch has been merged.
          </div>
        </div>
      </div>

      <SignupCard/>


    </div>
  );
};
