export interface ProductModel {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  tags: string[];
  images: string[];
}

export const products: ProductModel[] = [
  {
    id: 1,
    title: "Cuban Steel Chain",
    price: 479,
    category: "Necklaces",
    thumbnail:
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/f21f0155-3433-46a2-acd0-1dd526df9bf5.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    tags: [""],
    images: [
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/84096724-863e-4ab6-87e9-01e7c1b76fd7.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/6a3971ea-bbe8-48a5-9321-1231b7e8fbc9.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
  },
  {
    id: 2,
    title: "Gold Cuban Bracelet",
    price: 2132,
    category: "Necklaces",
    thumbnail:
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/203202/291139512497.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    tags: [""],
    images: [
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/203202/261474713179.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/203202/721402042323.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
  },
  {
    id: 3,
    title: "Big Bad Wolf Bracelet",
    price: 642,
    category: "Bracelets",
    thumbnail:
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/1622185845785.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    tags: [""],
    images: [
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/1622185845786.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/1622185845788.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/1622185845783.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
  },
  {
    id: 4,
    title: "Rose Gold Cuban Chain",
    price: 4119,
    category: "Necklace",
    thumbnail:
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/15569856/550169610426.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    tags: [""],
    images: [
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/15569856/3189966970561.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/15569856/1299335372240.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/15569856/5100503356080.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
  },
  {
    id: 5,
    title: "Gold Bead Necklace",
    price: 542,
    category: "Necklace",
    thumbnail:
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/19805839-1523-451b-b63a-cd9641ccc09e.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    tags: [""],
    images: [
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/999e2dc8-e816-4db4-ba4b-98eea79b8619.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/4a9248fb-c579-4fc4-8ace-c128db901d5e.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/quick/product/ba8939a2-57f1-446a-acb0-8b3f1e53a241.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
  },
  {
    id: 6,
    title: "CZ Cross Pendant",
    price: 311,
    category: "Necklace",
    thumbnail:
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/b877aa92-1e3a-422a-91f3-0744a62bba91.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    tags: [""],
    images: [
      "https://cc-west-usa.oss-accelerate.aliyuncs.com/5aa2dc78-6cb9-4164-8a92-7578788feb84.jpg?x-oss-process=image/resize,m_pad,w_400,h_400",
    ],
  },
];
