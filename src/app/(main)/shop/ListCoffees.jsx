import Image from 'next/image';
import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const ListCoffees = () => {
    const { items, error, addToCart } = useContext(DataContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (items) {
            setLoading(false);
        }
    }, [items]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleAddToCart = (item) => {
        addToCart(item);
    };

    // Skeleton Loader Component
    const SkeletonLoader = () => (
        <div className="grid grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
                <div
                    key={index}
                    className="flex flex-col bg-neutral-300 w-56 h-64 animate-pulse rounded-xl p-4 gap-4"
                >
                    <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                        <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
                        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                        <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <div className="flex flex-col items-center justify-center pt-[104px] pb-10 gap-6">
                <div className="w-[179px] h-[28px] font-medium text-2xl leading-7 text-[#2a5b45]">
                    <div className="flex"></div>
                    <h2>Últimos orígenes</h2>
                </div>
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <div className="grid grid-cols-4 gap-6">
                        {items.map((item) => (
                            <div
                                className={`group flex flex-col items-center justify-center w-[282px] h-[391.39px] border gap-6 rounded-lg border-[solid] hover:bg-[#f7f5f3] ${
                                    !item.available ? "opacity-40 -z-10" : ""
                                }`}
                                key={item._id}
                            >
                                <Image
                                    src={item.img_url}
                                    alt="coffe"
                                    width={219.39}
                                    height={219.39}
                                />
                                <div className="flex justify-center flex-col items-center gap-3">
                                    <h3 className="font-semibold text-sm">{item.brand}</h3>
                                    <p className="text-sm font-normal">
                                        {item.price["$numberDecimal"]}€
                                    </p>
                                </div>
                                <div
                                    className={`flex justify-center items-center w-[60px] h-8 rounded gap-2 ${
                                        item.available
                                            ? "bg-[#2a5b45b2] group-hover:bg-[#2a5b45]"
                                            : "bg-gray-400"
                                    }`}
                                    onClick={() => item.available && handleAddToCart(item)}
                                >
                                    <span
                                        className={`text-sm font-semibold leading-4 text-[white] no-underline cursor-pointer ${
                                            !item.available ? "w-auto" : "w-11"
                                        }`}
                                    >
                                        {item.available ? "Añadir" : "Agotado"}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListCoffees;
