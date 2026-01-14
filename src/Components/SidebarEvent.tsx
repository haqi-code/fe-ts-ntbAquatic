import { Check } from "lucide-react";
import type { SidebarEventProps } from "../types/sidebarEventType";
import { menus } from "../data/sidebarEventMenuData";
import { useLocation, useNavigate, useParams } from "react-router";

export default function SidebarEvent({ onSelect }: SidebarEventProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-screen sticky top-0 bg-amber-200">
      <div className="w-1/6 h-[92vh] py-4 px-10 pt-3">
        {menus.map((menu) => {
          const active = location.pathname.endsWith(menu.key);

          return (
            <div
              key={menu.key}
              onClick={() => {
                onSelect(menu.key);
                navigate(`/admin/multi-event/detail/${id}/${menu.key}`);
              }}
              className={`flex items-center gap-4 py-2 cursor-pointer
                                ${active ? "font-bold text-amber-800" : ""}
                            `}
            >
              <div className="bg-amber-800 rounded-full p-1">
                <Check size={18} />
              </div>
              <p className="text-lg">{menu.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
