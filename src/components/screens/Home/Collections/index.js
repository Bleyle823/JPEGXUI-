import React from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./Collections.module.sass";
import Icon from "../../../components/Icon";

const items = [
  {
    title: "Liquidity Providers",
    title2: "Earn",
    title3: "Pool your NFT at competitive strike prices and earn more yield on your assets",
    author: "Kennith Olson",
    counter: "28",
    avatar: "/images/content/avatar-1.jpg",
    gallery: [
      "/images/content/photo-1.1.jpg",
      
    ],
  },
  {
    title: "NFT Owners",
    title2: "Hedge",
    title3: "Decrease risk by hedging your NFT portfolio against large price swings",
    author: "Willie Barton",
    counter: "28",
    avatar: "/images/content/avatar-3.jpg",
    gallery: [
      "/images/content/photo-2.1.jpg",
     
    ],
  },
  {
    title: "NFT Traders",
    title2: "Speculate",
    title3: "Access deep liquidity of best NFT projects at competitive strike prices for leveraged NFT trading",
    author: "Halle Jakubowski",
    counter: "28",
    avatar: "/images/content/avatar-4.jpg",
    gallery: [
      "/images/content/photo-3.1.jpg",
     
    ],
  },
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Collections = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
          
          <div className={styles.inner}>
            <Slider className="collection-slider" {...settings}>
              {items.map((x, index) => (
                <Link className={styles.item} to="/profile" key={index}>
                  <div className={styles.gallery}>
                    {x.gallery.map((x, index) => (
                      <div className={styles.preview} key={index}>
                        <img src={x} alt="Collection" />
                      </div>
                    ))}
                  </div>
                  <div className={styles.subtitle}>{x.title}</div>
                  <div className={styles.subtitle}>{x.title2}</div>
                  <div className={styles.subtitle}></div>
                  <div className={styles.line}>
                    <div className={styles.user}>
                    {x.title3}
                      
                    </div>
                    
                  </div>
                </Link>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    
  );
};

export default Collections;
