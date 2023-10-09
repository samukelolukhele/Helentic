import { useState } from "react";

const useChangeThumbnali = (thumbnail: string) => {
  const [currentThumbnail, setCurrentThumbnail] = useState(thumbnail);
  function handleThumbnail(thumbnailChange: string) {
    return currentThumbnail === thumbnailChange
      ? setCurrentThumbnail(thumbnail)
      : setCurrentThumbnail(thumbnailChange);
  }

  return { handleThumbnail, currentThumbnail };
};

export default useChangeThumbnali;
