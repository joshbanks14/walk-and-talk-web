import DogImage from "../../../../_assets/dog3.jpg";
import CatImage from "../../../../_assets/cat2.jpg";
import PetSittingImage from "../../../../_assets/dog4.jpg";
import DropInImage from "../../../../_assets/dropin5.jpg";
import HomeVisitImage from "../../../../_assets/homevisit.jpg";
import ServiceCard from "../service-card/index";
import styles from "./ServiceSection.module.css";
import { useWindowDimensions } from "../../../../_hooks/use-window-dimensions";

export const ServiceSection = () => {
  const { isMobile } = useWindowDimensions();
  return (
    <div className={isMobile ? styles.containerMobile : styles.container}>
      <div className={isMobile ? styles.servicesMobile : styles.services}>
        <ServiceCard
          image={PetSittingImage}
          header="Pet Sitting"
          body="I offer overnight pet sitting services so your pet is comfortable in their own home."
          info="Choosing and trusting the right person to look after your beloved pets and stay in your home is a huge decision and one that I do not underestimate. To have a professional pet sitter in your home, providing overnight care, means your pets are relaxed in their own environment and are comfortable with their regular routines. You can go away on holiday, assured that your pets are loved and well cared for in their own home, following their usual routine. I will regularly update you with photographs and videos. Whilst i am staying in your home i can also remove post, put bins out and water plants. Please contact me for prices."
        />
        <ServiceCard
          image={CatImage}
          header="Cat Visits"
          body="I provide home visits for cats and do house hold tasks whilst your
              away. Cat visits start from £10.00."
          info="Cats can be territorial and become easily stressed in unfamiliar surroundings. This is where I come in and provide visits to your home. These visits not only provide your cat with individual care and company, but they also allow your cat to remain happy in their familiar environment when you can’t be there.  I will regularly update you with photographs and videos. 

During these visits I can also remove post, open and close curtains, lights on/off, put bins out and water plants.

Cat visits start from £10.00. "
        />
        <ServiceCard
          image={DogImage}
          header="Dog Walking"
          body="I offer a range of different options for dog walking to suit your
              dogs needs. Walks start from £10.00. "
          info="I offer solo walks for anxious/reactive dogs, puppies or older dogs who want to walk at a leisurely pace.
I do offer group walks, but for no more than 3 dogs at a time. 
I always do a meet and greet first so we can discuss your and your dogs requirements and answer any questions you might have. 

Walks start from £10.00 depending on duration and number of dogs."
        />
        <ServiceCard
          image={DropInImage}
          header="Drop-Ins"
          body="Drop in visits are perfect for domestic pets that can be left alone for most of the day when you are away."
          info="Drop ins visits are perfect for domestic pets that can be left alone for most of the day when you are away. I can change bedding, refresh water and feed. Also lots of cuddles and play, if required. During these visits I can also remove post, open and close curtains, switch lights on/off, put bins out and water plans. Visits start from £10.00 depending on duration."
        />
        <ServiceCard
          image={HomeVisitImage}
          header="Home Visits"
          body="Home visits are ideal for older and younger dogs who cannot walk as far. Visits start from £10.00."
          info="Home visits are ideal for older and younger dogs who cannot walk as far. I can provide companionship, toilet breaks, small walks if required and also administer medication. Having loved an cared for a diabetic dog I can also give injections. Visits start from £10.00 depending on duration."
        />
      </div>
    </div>
  );
};
