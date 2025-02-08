
import { useEffect, useState } from "react";
import { carGallery } from "../Helper/Helper";

const Gallery = () => {

    const [data, setData] = useState([]);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        setData(carGallery);
        setCollection([... new Set(carGallery.map((item) => item.title))])
    }, [])

    const gallery_filter = (itemData) => {
        const filterData = carGallery.filter((item) => item.title == itemData);
        setData(filterData);
    }

    return (

        <section className="py-28 flex flex-col items-center " id="gallery">
        <h3 className="text-5xl font-semibold text-white">Galeria</h3>
        <p className="text-3xl text-white text-center"><span className="text-sky-500">Fotos da Oficina</span> e Carros de Clientes</p>
            <div>
                <ul className="btnFilter my-10">
                    <li>
                        <button onClick={() => setData(carGallery)}>Todos</button>
                    </li>
                    {collection.map((item) =>
                        <li>
                            <button onClick={() => { gallery_filter(item) }}>{item}</button>
                        </li>)}
                </ul>
            </div>
            <div className="px-1 md:px-8 flex flex-wrap justify-center">
                {
                    data.map((item) =>
        
                    <div key={item.id} className="inline-block m-4">
                            <img src={item.image} className="w-72 h-72 max-[650px]:w-44 max-[650px]:h-44 max-[420px]:w-60 max-[4200px]:h-60  hover:border-2 hover:border-white " />
                        </div>

                        )
                }
            </div>
        </section>

    );
}

export default Gallery