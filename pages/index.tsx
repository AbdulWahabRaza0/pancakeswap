import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { Wrapper, HomeStyle } from "../components/Styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ImageComp } from "../components/Images";
import { H1 } from "../components/typography";
import { BannerButton } from "../components/Buttons";
export default function Home() {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  return mount ? (
    <>
      <Navbar title="Home" />
      <HomeStyle>
        <Wrapper className="home_res_carousel">
          <Carousel autoPlay={true} showStatus={false} dynamicHeight={false}>
            <Wrapper
              style={{
                position: "relative",
                backgroundColor: "#00A28F",
                marginTop: "5%",
                marginLeft: "10%",
                marginRight: "10%",
                borderRadius: "50px",
                width: "80%",
                height: "80%",
              }}
            >
              <ImageComp
                className="res_carousel_home_image"
                src="/assets/carousel_img1.webp"
                alt="banner"
                width="auto"
                height="auto"
                fluid={false}
                style={null}
              />
              <Wrapper style={{ position: "absolute", top: "30%", left: "2%" }}>
                <H1 color="white" weight="bolder">
                  Hello Aptos Project Team
                </H1>
              </Wrapper>
              <Wrapper style={{ position: "absolute", top: "60%", left: "2%" }}>
                <BannerButton bg="#2d9ec4">{"Get in Touch ->"}</BannerButton>
              </Wrapper>
            </Wrapper>
            <Wrapper
              style={{
                position: "relative",
                backgroundColor: "#6A3EC1",
                marginTop: "5%",
                marginLeft: "10%",
                marginRight: "10%",
                borderRadius: "50px",
                width: "80%",
                height: "80%",
              }}
            >
              <ImageComp
                className="res_carousel_home_image"
                src="/assets/carousel_img2.webp"
                alt="banner"
                width="100px"
                height="30%"
                fluid={true}
                style={null}
              />
              <Wrapper style={{ position: "absolute", top: "30%", left: "2%" }}>
                <H1 color="white" weight="bolder">
                  Win $89,124 Lottery
                </H1>
              </Wrapper>
              <Wrapper style={{ position: "absolute", top: "65%", left: "2%" }}>
                <BannerButton bg="#2D9EC4">{"Trade Now ->"}</BannerButton>
              </Wrapper>
            </Wrapper>
          </Carousel>
        </Wrapper>
      </HomeStyle>
    </>
  ) : (
    <></>
  );
}
