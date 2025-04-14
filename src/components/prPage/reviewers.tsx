import React from "react";
import { ApproveIcon, BellIcon } from "../../utils/icons";

const reviewers = [
  { name: "shadcn", avatar: "https://avatars.githubusercontent.com/u/124599?s=52&v=4" },
  { name: "Jacksonmills", avatar: "https://avatars.githubusercontent.com/u/15782156?s=52&v=4" },
  { name: "matevegh", avatar: "https://avatars.githubusercontent.com/u/19780885?s=52&v=4" },
];

const participants = [
  "https://avatars.githubusercontent.com/u/15782156?s=52&v=4",
  "https://avatars.githubusercontent.com/u/124599?s=52&v=4",
  "https://avatars.githubusercontent.com/u/19780885?s=52&v=4",
  "https://avatars.githubusercontent.com/u/30011773?s=52&v=4",
];

export const Sidebar: React.FC = () => {
  return (
    <div className=" p-4 rounded text-sm  space-y-4">
      {/* Reviewers */}
      <div>
        <p className="font-semibold mb-2 text-[#59636e] text-[12px]">Reviewers</p>
        <div className="space-y-2">
          {reviewers.map((reviewer, index) => (
            <div key={index} className="flex items-center gap-2 justify-between">
              <div className="flex">
              <img
                src={reviewer.avatar}
                alt={reviewer.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="ml-2 text-[#1f2328] font-bold text-[12px]">{reviewer.name}</span>
              </div>
              <ApproveIcon/>
            </div>
          ))}
        </div>
      </div>

      <hr className="text-[#d1d9e0b3]"/>

      {/* Assignees */}
      <div>
        <p className="font-semibold mb-1 text-[#59636e] text-[12px]">Assignees</p>
        <p className="text-[#1f2328] text-[12px]">No one assigned</p>
      </div>

      <hr className="text-[#d1d9e0b3]"/>

      {/* Labels */}
      <div>
        <p className="font-semibold mb-2 text-[#59636e] text-[12px]">Labels</p>
        <span
          className="text-white text-xs font-medium px-2 py-1 inline-block bg-[#0e8a16] rounded-2xl"
        >
          automerge
        </span>
      </div>

      <hr className="text-[#d1d9e0b3]"/>

      {/* Projects */}
      <div>
        <p className="font-semibold mb-1 text-[#59636e] text-[12px]">Projects</p>
        <p className="text-[#1f2328] text-[12px]">None yet</p>
      </div>

      <hr className="text-[#d1d9e0b3]" />

      {/* Milestone */}
      <div>
        <p className="font-semibold mb-1 text-[#59636e] text-[12px]">Milestone</p>
        <p className="text-[#1f2328] text-[12px]">No milestone</p>
      </div>

      <hr className="text-[#d1d9e0b3]"/>

      {/* Development */}
      <div>
        <p className="font-semibold mb-2 text-[#59636e] text-[12px]">Development</p>
        <p className="text-[#1f2328] text-[12px]">
          Successfully merging this pull request may close these issues.
        </p>
        <p className="text-[#1f2328] text-[12px] mt-4">None yet</p>
      </div>

      <hr className="text-[#d1d9e0b3]"/>

      {/* Notifications */}
      <div>
        <div className="flex justify-between">
        <p className="font-semibold mb-2 text-[#59636e] text-[12px]">Notifications</p>
        <div className=" mb-2 text-[#59636e] text-[12px]">Customize </div> 
        </div>

        <button
          className="w-full text-sm font-medium rounded-md px-4 py-1 border flex items-center justify-center hover:bg-[#eff2f5] bg-[#f6f8fa] border-[#d1d9e0] hover:border-[#d1d9e0]"
        >
          <BellIcon fill="#25292e"/> <span className="ml-1 text-[#25292e] text-[12px]">Subscribe</span>
        </button>
        <p className="text-[#59636e] mb-2 text-[12px]">
          You’re not receiving notifications from this thread.
        </p>
      </div>

      <hr className="text-[#d1d9e0b3]"/>

      {/* Participants */}
      <div>
        <p className="font-semibold mb-2 text-[#59636e] text-[12px]">4 participants</p>
        <div className="flex space-x-2">
          {participants.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`participant-${i}`}
              className="w-6 h-6 rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
