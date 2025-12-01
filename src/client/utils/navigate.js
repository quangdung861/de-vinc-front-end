import { useNavigate, generatePath } from "react-router-dom";
export const useNavigateWithSlug = () => {
  const navigate = useNavigate();
  return (path, slug) => {
    const finalPath = generatePath(path, { slug });
    navigate(finalPath);
  };
};
