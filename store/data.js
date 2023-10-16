export const useTableStore = defineStore("database", () => {
  let itemOver = ref();

  let currentBoard = ref();
  let currentItem = ref();
  const tables = ref([
    {
      id: 0,
      title: "Table 1",
      items: [
        { id: 1, title: "Table 1 new row 1" },
        { id: 2, title: "Table 1 new row 2" },
        { id: 3, title: "Table 1 new row 3" },
      ],
    },
    {
      id: 1,
      title: "Table 2",
      items: [
        { id: 1, title: "Table 2 new row 1" },
        { id: 2, title: "Table 2 new row 2" },
        { id: 3, title: "Table 2 new row 3" },
      ],
    },
    {
      id: 2,
      title: "Table 3",
      items: [
        { id: 1, title: "Table 3 new row 1" },
        { id: 2, title: "Table 3 new row 2" },
        { id: 3, title: "Table 3 new row 3" },
      ],
    },
    {
      id: 3,
      title: "Table 4",
      items: [
        { id: 1, title: "Table 4 new row 1" },
        { id: 2, title: "Table 4 new row 2" },
        { id: 3, title: "Table 4 new row 3" },
      ],
    },
  ]);

  const setItemOver = (newItem) => {
    itemOver.value = newItem;
  };

  const setCurrentBoard = (newBoard) => {
    currentBoard.value = newBoard;
  };

  const setCurrentItem = (newItem) => {
    currentItem.value = newItem;
  };

  const removeTable = (idTable) => {
    for (let i = 0; i < tables.value.length; i++) {
      const element = tables.value[i];
      if (element.id === idTable) {
        tables.value.splice(i, 1);
        break;
      }
    }
  };

  return {
    tables,
    currentBoard,
    itemOver,
    currentItem,
    removeTable,
    setItemOver,
    setCurrentBoard,
    setCurrentItem,
  };
});
