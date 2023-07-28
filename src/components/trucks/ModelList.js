import React from "react";
import Truck from "./Truck";

const Trucks = () => {
  const products = [
    {
      title: "Крупный тоннаж",
      imageUrl:
        "https://hino-trucks.kz/wp-content/uploads/2019/11/700-fotka-e1573844787204.jpg",
      linkUrl:
        "https://hino-trucks.kz/modeli-hino/model-hino-700/polnaya-massa-30-7-t-samosval-fs/",
      subVariants: [
        {
          name: "ПОЛНАЯ МАССА 30,7 Т | ШАССИ FS",
          linkUrl:
            "https://hino-trucks.kz/modeli-hino/model-hino-700/polnaya-massa-30-7-t-samosval-fs/",
        },
        {
          name: "",
          linkUrl: "",
        },
      ],
    },
    {
      title: "Малый тоннаж",
      imageUrl:
        "https://hino-trucks.kz/wp-content/uploads/2019/11/300-fotka-e1573844624110.jpg",
      linkUrl: "https://hino-trucks.kz/modeli-hino/model-hino-300/",
      subVariants: [
        {
          name: "ПОЛНАЯ МАССА 5,5 Т | ШАССИ XZU",
          linkUrl:
            "https://hino-trucks.kz/modeli-hino/model-hino-300/polnaya-massa-5-5-t-shassi-xzu/",
        },
        {
          name: "ПОЛНАЯ МАССА 8,5 Т | ШАССИ XZU",
          linkUrl:
            "https://hino-trucks.kz/modeli-hino/model-hino-300/polnaya-massa-8-5-t-shassi-xzu/",
        },
      ],
    },
    {
      title: "Средний тоннаж",
      imageUrl:
        "https://hino-trucks.kz/wp-content/uploads/2019/11/500-foto.jpg",
      linkUrl: "https://hino-trucks.kz/modeli-hino/model-hino-500/",
      subVariants: [
        {
          name: "ПОЛНАЯ МАССА 12,0 Т | ШАССИ GD",
          linkUrl:
            "https://hino-trucks.kz/modeli-hino/model-hino-500/modifikatsiya-gd-shassi-polnoy-massoy-12-0-t/",
        },
        {
          name: "ПОЛНАЯ МАССА 18,0 Т | ШАССИ GH",
          linkUrl:
            "https://hino-trucks.kz/modeli-hino/model-hino-500/modifikatsiya-gh-shassi-polnoy-massoy-17-0-t/",
        },
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row box-product">
        {products.map((product, index) => (
          <Truck key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Trucks;
