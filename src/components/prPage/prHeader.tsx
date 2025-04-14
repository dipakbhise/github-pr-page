import { PRMeta } from "../../types";
import { CopyIcon, MergeIcon } from "../../utils/icons";
import ThemeToggleButton from "./themeToggle";

interface Props {
  meta: PRMeta;
}

export const PRHeader: React.FC<Props> = ({ meta }) => (
  <div className=" pb-4 mb-4 flex flex-wrap">
    <div className="flex justify-between flex-wrap w-full">
      <div>
        <h1 className="text-[32px] mb-[8px]">
          <span className="font-semibold dark:text-gray-200">{meta.title}</span>{" "}
          <span className="text-[#59636e]">#{meta.number}</span>
        </h1>
      </div>
      <div>
        <ThemeToggleButton />
      </div>
    </div>
    <p className="text-sm text-gray-500 flex items-center flex-wrap">
      <span className="bg-[#8250df] py-1 px-4 text-white rounded-3xl mr-2 font-semibold flex items-center">
        {meta.merged ? (<><span className="mr-2"><MergeIcon/></span> Merged</>) : "🟡 Open"}
      </span>
      <span className="text-[#59636e] font-semibold">{meta.author} &nbsp;</span>{" "}
      merged 1 commit into &nbsp;
      <span className="text-[#0969da] bg-[#ddf4ff] px-1 rounded-md">
        &nbsp;{meta.baseBranch}{" "}
      </span>
      &nbsp;from&nbsp;{" "}
      <span className="text-[#0969da] bg-[#ddf4ff] px-1 rounded-md">
        {meta.compareBranch}
      </span>{" "}
      <span className="mx-2">
        <CopyIcon />{" "}
      </span>{" "}
      {meta.timestamp}
    </p>
  </div>
);
