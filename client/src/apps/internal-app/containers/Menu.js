import React from 'react'
import styles from './css/Menu.module.css'
<<<<<<< HEAD

const Menu = () => {

  return (
    <div className={styles.Menu}>
       <div>Menu</div>
    </div>
  )
=======
import MenuItem from '../components/MenuItem'
import MenuImg1 from '../../../assets/Menu-Items/menu-1.jpg'
import MenuImg2 from '../../../assets/Menu-Items/menu-2.jpg'
import MenuImg3 from '../../../assets/Menu-Items/menu-3.jpg'
import MenuImg4 from '../../../assets/Menu-Items/menu-4.jpg'
import MenuImg5 from '../../../assets/Menu-Items/menu-5.jpg'
import MenuImg6 from '../../../assets/Menu-Items/menu-6.jpg'
import MenuImg7 from '../../../assets/Menu-Items/menu-7.jpg'
import MenuImg8 from '../../../assets/Menu-Items/menu-8.jpg'


const Menu = () => {

    const menuItems = [
        {
            name: "Seafood",
            description: "Fresh catch of the day, seasoned and grilled to perfection.",
            price: Math.floor(Math.random() * (800 - 300 + 1)) + 300,
            image: MenuImg1
        },
        {
            name: "Chicken Ramen",
            description: "Tender chicken pieces served in a savory broth with noodles.",
            price: Math.floor(Math.random() * (800 - 300 + 1)) + 300,
            image: MenuImg2
        },
        {
            name: "Shrimp Cheese Salad",
            description: "Juicy shrimp, mixed greens, and cheese tossed in a tangy dressing.",
            price: Math.floor(Math.random() * (800 - 300 + 1)) + 300,
            image: MenuImg3
        },
        {
            name: "Soya Steaks",
            description: "Vegetarian soy-based steaks seasoned and grilled to perfection.",
            price: Math.floor(Math.random() * (800 - 300 + 1)) + 300,
            image: MenuImg4
        },
        {
            name: "Chicken Mega Thali",
            description: "A grand Indian platter featuring a variety of chicken dishes.",
            price: Math.floor(Math.random() * (800 - 300 + 1)) + 300,
            image: MenuImg5
        },
        {
            name: "Tandoori Brunch",
            description: "An assortment of tandoori delights, perfect for brunch.",
            price: Math.floor(Math.random() * (800 - 300 + 1)) + 300,
            image: MenuImg6
        },
        {
            name: "Beef Pizza",
            description: "Thin-crust pizza topped with succulent beef and savory sauce.",
            price: Math.floor(Math.random() * (800 - 300 + 1)) + 300,
            image: MenuImg7
        },
        {
            name: "Mutton Salad",
            description: "Tender mutton slices served with fresh greens and zesty dressing.",
            price: Math.floor(Math.random() * (800 - 300 + 1)) + 300,
            image: MenuImg8
        }
    ];




    return (
        <div className={styles.Home}>
            <div className={styles.Container}>

                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    )
>>>>>>> de17b45 (Added Menu Page , Home Page)
}

export default Menu