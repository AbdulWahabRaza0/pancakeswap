import styled from "styled-components";
import { mlProps, mrProps, mtProps, mbProps } from "./PropsInterface";
export const Spacer = styled.div`
  width: ${(props: any) => props.width || "0px"};
  height: ${(props: any) => props.height || "0px"};
`;

export const MarginSpacer = styled.div`
  margin-left: ${(props: any) => props.ml || "0px"};
  margin-right: ${(props: any) => props.mr || "0px"};
  margin-top: ${(props: any) => props.mt || "0px"};
  margin-bottom: ${(props: any) => props.mb || "0px"};
`;
