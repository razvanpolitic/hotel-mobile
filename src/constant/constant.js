import inspected_icon from "../assets/images/inhouse_view/inspected_icon.svg";
import clean_icon from "../assets/images/inhouse_view/clean_icon.svg";
import dirty_icon from "../assets/images/inhouse_view/dirty_icon.svg";
import dnd_icon from "../assets/images/inhouse_view/dnd_icon.svg";
import out_of_order_icon from "../assets/images/inhouse_view/out_of_order_icon.svg";
import out_of_service_icon from "../assets/images/inhouse_view/out_of_service_icon.svg";
import pickup_icon from "../assets/images/inhouse_view/pickup_icon.svg";

export const filterCardsData = [
  {
    icon: dirty_icon,
    text: "Dirty",
    status: "dirty",
    background: "#E10534",
  },
  {
    icon: clean_icon,
    text: "Clean",
    status: "clean",
    background: "#1DA6E9",
  },
  {
    icon: pickup_icon,
    text: "Pick-up",
    status: "pickup",
    background: "#F5A622",
  },
  {
    icon: dnd_icon,
    text: "DND",
    status: "DND",
    background: "#26D6CF",
  },
  {
    icon: inspected_icon,
    text: "Inspected",
    status: "inspected",
    background: "#54A92D",
  },
];

export const maintainanceServiceData = [
  {
    icon: out_of_order_icon,
    background: "#404040",
  },
  {
    icon: out_of_service_icon,
    background: "#404040",
  },
];

export function getIconFromStatus(status) {
  if (status === "clean") return clean_icon;
  if (status === "pickup") return pickup_icon;
  if (status === "inspected") return inspected_icon;
  if (status === "DND") return dnd_icon;
  if (status === "dirty") return dirty_icon;
  if (status === "OOO") return out_of_order_icon;
  if (status === "OOS") return out_of_service_icon;
}

export function getBackgroundColorFromStatus(status) {
  if (status === "clean") return "#1DA6E9";
  if (status === "pickup") return "#F5A622";
  if (status === "inspected") return "#54A92D";
  if (status === "DND") return "#26D6CF";
  if (status === "dirty") return "#E10534";
  if (status === "OOO") return "#404040";
  if (status === "OOS") return "#404040";
}
