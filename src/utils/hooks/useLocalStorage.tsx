const useLocalStorage = () => {
  function saveToLocalStorage(containerName: string, data: any) {
    return localStorage.setItem(containerName, JSON.stringify(data));
  }

  function parseFromLocalStorage(containerName: string) {
    const storageItem = localStorage.getItem(containerName);

    try {
      const item = JSON.parse(storageItem || "");

      if (item && typeof item === "object") return item;
    } catch (e) {
      return [];
    }
  }

  function removeFromLocalStorage(containerName: string) {
    return localStorage.removeItem(containerName);
  }

  return { parseFromLocalStorage, saveToLocalStorage, removeFromLocalStorage };
};

export default useLocalStorage;
