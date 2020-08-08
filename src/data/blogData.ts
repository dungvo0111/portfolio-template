import img1 from "../assets/images/img-1.jpg";
import img2 from "../assets/images/img-2.jpg";
import img3 from "../assets/images/img-3.jpg";

type blogDataCheck = Array<{
  imgSrc: string,
  titleId: string,
  title: string,
  content: string,
  buttonId: string,
}>;

export const blogData: blogDataCheck = [
  {
    imgSrc: img1,
    titleId: "blog-title-1",
    title: "Blog 1 Title",
    content:
      "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Mattis enim ut tellus elementum sagittis vitae et. Massa vitae tortor condimentum lacinia quis vel eros. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum.",
    buttonId: "blog-button-1",
  },
  {
    imgSrc: img2,
    titleId: "blog-title-2",
    title: "Blog 2 Title",
    content:
      "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Mattis enim ut tellus elementum sagittis vitae et. Massa vitae tortor condimentum lacinia quis vel eros. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum.",
    buttonId: "blog-button-2",
  },
  {
    imgSrc: img3,
    titleId: "blog-title-3",
    title: "Blog 3 Title",
    content:
      "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Mattis enim ut tellus elementum sagittis vitae et. Massa vitae tortor condimentum lacinia quis vel eros. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum.",
    buttonId: "blog-button-3",
  },
];
