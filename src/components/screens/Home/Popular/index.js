import React, { useState } from "react";
import cn from "classnames";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import styles from "./Popular.module.sass";
import Add from "./Add";
import Icon from "../../../components/Icon";
import Dropdown from "../../../components/Dropdown";
import DropdownEmpty from "../../../components/DropdownEmpty";

const items = [
  {
    name: "Polygon",
    sign: "/images/content/cup.svg",
    number: "1",
    url: "/profile",
    color: "#3772FF",
    avatar: "/images/polygon.png",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  {
    name: "Superfliud",
    sign: "/images/content/donut.svg",
    number: "2",
    url: "/profile",
    color: "#9757D7",
    avatar: "/images/Superfluid.jpg",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  {
    name: "Tellor",
    sign: "/jpegxUI-main/public/images/polygon.png",
    number: "3",
    url: "/profile",
    color: "#45B26B",
    avatar: "/images/Tellor.png",
    reward: "/images/content/reward-1.svg",
    price: "<span>2.456</span> ETH",
  },
  
];

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const dateOptions = ["Today", "Morning", "Dinner", "Evening"];
const directionOptions = ["Sellers", "Buyers"];

const Popular = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
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
        breakpoint: 1340,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
    ],
  };

  const [date, setDate] = useState(dateOptions[0]);
  const [direction, setDirection] = useState(directionOptions[0]);

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={styles.box1}>
            <div className={styles.stage}>Built Using </div>
          </div>
          
        </div>
        <div className={styles.wrapper}>
          <Slider className="popular-slider" {...settings}>
            {items.map((x, index) => (
              <div className={styles.slide} key={index}>
                <div className={styles.item}>
                  
                  
                    <div className={styles.avatar}>
                      <img src={x.avatar} alt="Avatar" />
                     
                    </div>
                    <div className={styles.name}>{x.name}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Popular;
