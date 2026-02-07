import CategoryCards from "@/home/CategoryCards";

const corporateCategories =[
    {
      id: "agra",
      title: "Agra",
      description: "",
      image: "/images/agra.jpg",
      href: "",
    },
    {
      id: "uttrakhand",
      title: "Uttrakhand",
      description: "",
      image: "/images/uttrakhand.jpg",
      href: "",
    },
    {
      id: "mathura",
      title: "Mathura",
      description: "",
      image: "/images/mathura.jpg",
      href: "",
    },
    {
      id: "kashmir",
      title: "Kashmir",
      description: "",
      image: "/images/kashmir.jpg",
      href: "",
    },
    {
      id: "Rajasthan",
      title: "Rajasthan",
      description: "",
      image: "/images/Rajasthan.jpg",
      href: "",
    },
    {
      id: "Goa",
      title: "Goa",
      description: "",
      image: "/images/Goa.jpg",
      href: "",
    },
    {
      id: "himachal",
      title: "Himachal Pradesh",
      description: "",
      image: "/images/himachal.png",
      href: "",
    },
    {
      id: "LEH",
      title: "LEH",
      description: "",
      image: "/images/LEH.jpg",
      href: "",
    },
  ];


export default function UpcomingPackage (){
    return (
        <CategoryCards
        title="Our India Packages"
        subtitle="Trusted by leading organizations"
        categories={corporateCategories}
       />
    )
}