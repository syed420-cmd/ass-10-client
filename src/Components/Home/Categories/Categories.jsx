import React from 'react';

const Categories = () => {

    const datas = [
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoG6RLBxxn3hA5Z8aJFOFvipB4PXuzH25xEoPxPnugAQ&s",
            description: "Clay Sculpture"
        },

        {
            img: "https://thumbs.dreamstime.com/b/sculptor-carving-working-gypsum-bust-sculpture-68258481.jpg",
            description: "Stone Sculpture"
        },

        {
            img: "https://i.etsystatic.com/15430497/r/il/992534/1516158675/il_570xN.1516158675_rav2.jpg",
            description: "Metal Sculpture"
        },

        {
            img: "https://media.istockphoto.com/id/187097779/photo/food-art.jpg?s=612x612&w=0&k=20&c=uUYvzb53aAH87wGN8XIj7_ap7y03j4Z063-U0YRFonM=",
            description: "Food carving"
        },

        {
            img: "https://www.ocregister.com/wp-content/uploads/migration/nv9/nv9kgb-b88508314z.120150925200044000g46c6n0t.10.jpg?w=620",
            description: "Natural Material Sculpture"
        },

        {
            img: "https://www-tc.pbs.org/prod-media/antiques-roadshow/__sized__/Images/Spokane_20070804_01/200705A06/img00026518-crop-c0-5__0-5-676x380.jpg",
            description: "Beaded Sculpture"
        },

    ]
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-20">
            {
                datas.map((data, i)=>{
                   return <div key={i} className="relative rounded overflow-hidden">
                    <img src={data.img} alt="Hanging Planters" className="w-full h-[250px]"/>
                    <p
                    className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
                    {data.description}
                    </p>
                </div>
                })
            }
  
</div>
    );
};

export default Categories;