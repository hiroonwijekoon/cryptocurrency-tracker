import axios from "axios";
import "./Carousel.css";
import { trendingCoins } from "../../config/CoinGeckoApi";
import { CoinState } from "../../CoinContext";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export function numberWithCommas(x: Float32Array) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  //Set state for trending
  const [trending, setTrending] = useState([]);

  //getting selected currency from state
  const { currency, symbol } = CoinState();

  //fetch data from API
  const fetchTrendingCoins = async () => {
    axios
      .get(trendingCoins(currency))
      .then((response) => {
        setTrending(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const trendingItems = trending.map((coin: any) => {
    //calculate profit
    let profit = coin?.price_change_percentage_24h >= 0;
    return (
      <Link className="carousel-item" to={`/coins/${coin.id}`}>
        <img
          src={coin?.image}
          alt={coin.name}
          height="80px"
          style={{ marginBottom: 15 }}
        ></img>
        <Typography variant="body2" className="coin-name">
          {coin.name}
        </Typography>
        <Typography
          variant="body2"
          className="coin-profit"
          style={{ color: profit ? "green" : "red" }}
        >
          {profit && "+ "} {coin?.price_change_percentage_24h?.toFixed(2)}%
        </Typography>
        <Typography variant="body2" className="coin-price">
          {currency} {numberWithCommas(coin?.current_price?.toFixed(2))}
        </Typography>
      </Link>
    );
  });

  return (
    <div className="carousel">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={{
          0: { items: 2 },
          512: { items: 5, itemsFit: "contain" },
        }}
        autoPlay
        items={trendingItems}
      ></AliceCarousel>
    </div>
  );
};

export default Carousel;
