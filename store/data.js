export const useTableStore = defineStore("database", () => {
  let itemOver = ref();

  let currentBoard = ref();
  let currentItem = ref();

  const initialTable = ref({
    id: 0,
    title: "InitialTable",
    items: [
      { id: 1, title: "InitialTable new row 1" },
      { id: 2, title: "InitialTable new row 2" },
      { id: 3, title: "InitialTable new row 3" },
    ],
  });

  const tables = ref([]);

  const setItemOver = (newItem) => {
    itemOver.value = newItem;
  };

  const setCurrentBoard = (newBoard) => {
    currentBoard.value = newBoard;
  };

  const setCurrentItem = (newItem) => {
    currentItem.value = newItem;
  };

  const createNewRow = (newRow) =>{
    let countItems = initialTable.value.items.length
    initialTable.value.items.unshift({ id: countItems++, title: newRow })
  }

  const dropRow = (currentTable) =>{
    // удаляем прошлое значение с прошлой доски
    const currentIndex = currentBoard.value.items.indexOf(currentItem.value)
    currentBoard.value.items.splice(currentIndex, 1)
    
    // добавляем в текущую доску удаленный элемент
    const dropIndex = currentTable.items.indexOf(itemOver.value)
    currentTable.items.splice(dropIndex + 1, 0, currentItem.value)
}

  const createNewTable = (countNewTables) =>{
    let countTables = tables.value.length

    for (let i = 0; i < countNewTables; i++) {
      const tableId = countTables++

      tables.value.unshift({
        id: tableId,
        title: "Новая таблица",
        items: [],
      })
    }
    
  }

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
    initialTable,
    tables,
    currentBoard,
    itemOver,
    currentItem,
    dropRow,
    createNewRow,
    createNewTable,
    removeTable,
    setItemOver,
    setCurrentBoard,
    setCurrentItem,
  };
});
