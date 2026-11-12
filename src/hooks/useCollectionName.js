import axiosInstance from "@/api";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

// Breadcrumb üçün kolleksiyanın adını gətirir (dil dəyişəndə yenilənir)
export default function useCollectionName(collectionId) {
  const { lang } = useLanguage();
  const [name, setName] = useState(null);

  useEffect(() => {
    if (!collectionId) {
      setName(null);
      return;
    }
    let cancelled = false;
    axiosInstance
      .get(`/collections/${collectionId}`)
      .then((res) => {
        if (!cancelled) setName(res?.data?.name ?? null);
      })
      .catch(() => {
        if (!cancelled) setName(null);
      });
    return () => {
      cancelled = true;
    };
  }, [collectionId, lang]);

  return name;
}
