import { useState } from "react";

function Folder({ handleInsertNode = () => {}, explorer }) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...setShowInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div>
        <div className="folder" onClick={() => setExpand(!expand)}>
          {" "}
          📁 {explorer.name}
          <div className="" style={{}}>
            <button onClick={(e) => handleNewFolder(e, true)}>
              {" "}
              📁+ Folder
            </button>
            <button onClick={(e) => handleNewFolder(e, false)}>
              🗄️ + File
            </button>
          </div>
        </div>

        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "10px" }}
        >
          {showInput.visible && (
            <div className="inputContaine">
              <span>{showInput.isFolder ? "📁" : "🗄️"}</span>
              <input
                className="inputContainerInput"
                type="text"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...setShowInput, visible: false })}
              />
            </div>
          )}
          {explorer.items.map((item) => (
            <Folder
              handleInsertNode={handleInsertNode}
              className="folder"
              key={item.id}
              explorer={item}
            />
          ))}
        </div>
      </div>
    );
  }
  return <span className="file">🗄️{explorer.name}</span>;
}

export default Folder;
