import { useRef, useState } from "react";
import styles from "./our-destination.module.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const cards = [
  {
    id: 1,
    title: "Harvard University",
    description: "Cambridge, Massachusetts, UK",
    image: "/images/card-image-1.png",
  },
  {
    id: 2,
    title: "Oxford University",
    description: "Oxford, England",
    image: "/images/card-image-2.png",
  },
  {
    id: 3,
    title: "Stanford University",
    description: "Stanford, California",
    image: "/images/card-image.png",
  },
  {
    id: 3,
    title: "Nanyang Technological University",
    description: "Nanyang Ave, Singapura",
    image: "/images/card-image.png",
  },
  {
    id: 4,
    title: "Harvard University",
    description: "Cambridge, Massachusetts, UK",
    image: "/images/card-image-1.png",
  },
  {
    id: 5,
    title: "Oxford University",
    description: "Oxford, England",
    image: "/images/card-image-2.png",
  },
  {
    id: 6,
    title: "Stanford University",
    description: "Stanford, California",
    image: "/images/card-image.png",
  },
  {
    id: 7,
    title: "Harvard University",
    description: "Cambridge, Massachusetts, UK",
    image: "/images/card-image-1.png",
  },

  // Add more cards as needed
];

const OurDestinationSection = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardsPerPage = 1; // Number of cards visible at a time
  const cardWidth = 300; // Width of each card including margin

  const containerRef = useRef(null);

  const goToNextCard = () => {
    const nextIndex =
      currentCardIndex + cardsPerPage < cards.length
        ? currentCardIndex + cardsPerPage
        : cards.length - cardsPerPage;

    setCurrentCardIndex(nextIndex);
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: nextIndex * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const goToPrevCard = () => {
    const prevIndex =
      currentCardIndex - cardsPerPage >= 0
        ? currentCardIndex - cardsPerPage
        : 0;

    setCurrentCardIndex(prevIndex);
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: prevIndex * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.destinationSection}>
      <h3>Our Destinations</h3>
      <div className={styles.cardSwiper}>
        <div className={styles.cardContainer} ref={containerRef}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <img src={card.image} alt={card.title} />
              <h4 className={styles.cardTitle}>{card.title}</h4>
              <div className="">
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.prevButton} onClick={goToPrevCard}>
          <FaArrowLeftLong />
        </div>
        <p>
          <span>{currentCardIndex + 1} </span>/ {cards.length}
        </p>
        <div className={styles.nextButton} onClick={goToNextCard}>
          <FaArrowRightLong />
        </div>
      </div>
    </section>
  );
};

export default OurDestinationSection;
