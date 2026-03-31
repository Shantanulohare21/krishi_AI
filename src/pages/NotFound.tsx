import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-transparent">
      <div className="max-w-md px-6 text-center">
        <h1 className="mb-2 text-9xl font-extrabold text-emerald-600/20">404</h1>
        <div className="relative -mt-20">
          <h2 className="mb-4 text-3xl font-bold text-slate-800">
            {t("not_found.subtitle")}
          </h2>
          <p className="mb-8 text-slate-600">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              {t("not_found.return")}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
