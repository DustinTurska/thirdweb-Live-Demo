import type { NextPage } from "next";
import styles from "../../styles/Home.module.css";
import UseMetadata from "../../live-code/snippets/metadata/UseMetadata";
import UseResolveMediaType from "../../live-code/snippets/metadata/UseResolvedMediaType";
import UseUpdateMetadata from "../../live-code/snippets/metadata/UseUpdateMetadata";
const Metadata: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2>useMetadata</h2>
        <UseMetadata />
        <h2>useResolvedMediaType</h2>
        <UseResolveMediaType />
        <h2>useUpdateMetadata</h2>
        <UseUpdateMetadata />
        {/* <h2>useCompilerMetadata</h2>
        <UseCompilerMetadata /> */}
      </main>
    </div>
  );
};

export default Metadata;
