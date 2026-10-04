const useTransverseTree = () => {
  const insertNode = function (tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      });

      return tree;
    }
    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });
    return { ...tree, items: latestNode };
  };

  const deleteNode = function (tree, nodeId) {
    const latestNode = tree.items.filter((item) => {
      return item.id !== nodeId;
    });

    const updateItems = latestNode.map((item) => {
      if (item.isFolder) {
        return deleteNode(tree, nodeId);
      }
      return item;
    });

    return { ...tree, items: updateItems };
  };

  const renameNode = () => {};

  return { deleteNode, insertNode, renameNode };
};
export default useTransverseTree;
