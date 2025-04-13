

import { prMeta } from "../../../prData";
import { Layout } from "./layout";
import { PRHeader } from "./prHeader";
import TabComponent from "./tabs";


function PrPage() {
  return (
    <Layout>
      <PRHeader meta={prMeta} />
      <TabComponent/>

      {/* <section className="mb-6">
        <h2 className="text-lg font-medium mb-2">Conversation</h2>
        {comments.map((comment, idx) => (
          <CommentBlock key={idx} comment={comment} />
        ))}
      </section> */}


    </Layout>
  );
}

export default PrPage;
