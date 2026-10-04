import "./styles.css";
import Folder from "./components/Folder";
import explorer from "./data/explorerData";
import useTransverseTree from "./hooks/use-transverse-tree";
import { useState } from "react";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTransverseTree();

  const handleInsertNode = (isFolder, item, folderId) => {
    finalTree = insertNode(explorerData, isFolder, item, folderId);
    return setExplorerData(finalTree);
  };
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

// 1- create data for explorer schema.
//2- then import and render it in explorer data to folder compoenet.
// 3- create folder componet with intially display data then add update delet fucatinlity
// then create hooks to maintain a tree fo get the index
