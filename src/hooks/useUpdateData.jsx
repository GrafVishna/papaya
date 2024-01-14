import { useState } from "react";

export const useUpdateData = () => {
  const [dataUpdate, setDataUpdate] = useState(false);
  const [dataSaving, setDataSaving] = useState(false);

  const dataStateUpdate = () => {
    setDataUpdate(true);
    setTimeout(() => {
      setDataUpdate(false);
      setDataSaving(false);
    }, 2500);
  };

  const dataStateSaving = () => {
    setDataSaving(true);
  };

  const clearImageUpload = () => {
    setDataUpdate(null);
  };

  return {
    dataUpdate,
    setDataUpdate,
    dataSaving,
    dataStateUpdate,
    clearImageUpload,
    dataStateSaving,
  };
};
