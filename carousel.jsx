import React, { useState } from 'react'
function Carousel() {
    const Menu = [
        {
            id: 0,
            title: "Buttermilk Pancakes",
            category: "breakfast",
            price: 15.99,
            img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
            qushimcha: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
        },
        {
            id: 1,
            title: "Country Delight",
            category: "breakfast",
            price: 20.99,
            img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
            qushimcha: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"
        },
        {
            id: 2,
            title: "Bacon Overflow",
            category: "breakfast",
            price: 8.99,
            img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
            qushimcha: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
        },
        {

            id: 3,
            title: "Diner Double",
            category: "lunch",
            price: 12.99,
            img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
            qushimcha: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
        },
        {
            id: 4,
            title: "American Classic",
            category: "lunch",
            price: 13.99,
            img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
            qushimcha: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
        },
        {
            id: 5,
            title: "Egg Attack",
            category: "lunch",
            price: 22.99,
            img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
            qushimcha: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
        },
        {
            id: 6,
            title: "Godzilla Milkshake",
            category: "shakes",
            price: 6.99,
            img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
            qushimcha: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."

        },
        {
            id: 7,
            title: "Country Delight",
            category: "shakes",
            price: 20.99,
            img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
            qushimcha: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
        },
        {
            id: 8,
            title: "Country Delight",
            category: "shakes",
            price: 9.99,
            img: 'https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg',
            qushimcha: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
        },
        {
            id: 9,
            title: "Steak Dinner",
            category: "dinner",
            price: 39.99,
            img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
            qushimcha: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        }
    ]
    const [first, setfirst] = useState(0)
    function left() {
        setfirst(first === 0 ? 9 : first - 1)
    }
    function right() {
        setfirst(first === 9 ? 0 : first + 1)
    }
    let leng = Menu.length
    return (

        <>
            <div style={{ width: `${leng * 100}%`, transform: `translate(-${first * 10}%)`, transition: " 0.5s all ease-in-out" }} className='d-flex'  >
                {
                    Menu.map(data => (
                        <div className='w-100' style={{ height: "98vh" }}>
                            <img className='w-100 h-100' src={data.img} alt="" />
                        </div>
                    )
                    )
                }
            </div>
            <div className=' container d-flex justify-content-between ' style={{ marginTop: "-400px", position: "absolute", right:"100px" }} >
                <button className='butn' onClick={left}>{`<`}</button>
                <button className='butn' onClick={right}>{`>`}</button>
            </div>
        </>
    )
}

export default Carousel