import styled from "styled-components";
import tw from "tailwind.macro";

export const CustomButton = styled.button.attrs({
  className:
    "bg-red-400 text-base m-4 py-1 px-4 border-solid border-2 border-red-700 rounded-lg cursor-pointer inline-block",
})``;

// export const CustomButton = styled.button`
//   ${(props) => (props.primary ? tw`bg-red-700` : tw`bg-white`)};
//   ${(props) => (props.primary ? tw`text-white` : tw`text-red-700`)};
//   ${tw`text-base m-4 py-1 px-4 border-solid border-2 border-red-700 rounded-lg cursor-pointer inline-block`};
//   span {
//     ${tw`bg-white ml-4`}
//   }
// `;
