import styled from "styled-components";
import Image from "react-bootstrap/Image";
import { ImageProps } from "./PropsInterface";
export function ImageComp(props: ImageProps) {
  return (
    <>
      <Image
        width={props.width}
        height={props.height}
        fluid={props.fluid}
        src={props.src}
        alt={props.alt}
      />
    </>
  );
}
