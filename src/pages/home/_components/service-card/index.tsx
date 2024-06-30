import { useWindowDimensions } from "../../../../_hooks/use-window-dimensions";
import DesktopCard from "./desktop/DesktopCard";
import MobileCard from "./mobile/MobileCard";

type ServiceSectionProps = {
  image: string;
  header: string;
  body: string;
  info: string;
};

const ServiceCard = (props: ServiceSectionProps) => {
  const { isMobile } = useWindowDimensions();
  return (
    <>{isMobile ? <MobileCard {...props} /> : <DesktopCard {...props} />}</>
  );
};

export default ServiceCard;
