import React, { useEffect, useState } from "react";
import './accueil.css';
import JewelrySection from "./JewelrySection";
import Categories from './categories';
import WhyChooseUs from "./WhyChooseUs ";
import BijouxShop from "./BijouxShop";
import Products from "./Products";
import AboutUs from "./AboutUs";
import MoreHelp from "./MoreHelp";
import Footer from "./Footer";

import { CartProvider, useCart } from "react-use-cart";
import { Link } from "react-router-dom";

export default function Accueil({ product }) {
    const [categories, setCategories] = useState([]);
    const [countPanier, setCountPanier] = useState(0);

    // Récupérer le nombre d'articles dans le panier
    const { totalItems } = useCart();

    useEffect(() => {
        console.log("Total Items: ", totalItems);
        setCountPanier(totalItems || 0);
    }, [totalItems]);

    // API pour les catégories
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/categories")
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error("Erreur : ", error));
    }, []);

    return (
        <>
            <div className="">
                {/* Navbar Top */}
                <div className="navbar-top container">
                    <div className="social-link"></div>
                    <div className="logo">
                        <h3>Bijoux Shop</h3>
                    </div>
                    <div className="icons">
                        <span id="panier">
                            <Link to="cart" style={{ textDecoration: "none" }}>
                                <span style={{
                                    textDecoration: "none",
                                    color: "black",
                                    fontWeight: "700",
                                    position: "relative",
                                    left: "10px"
                                }}>
                                    {countPanier}
                                </span>
                                <i><img src="./image/shopping-cart.png" alt="Cart" width="25px" /></i>
                            </Link>
                        </span>
                    </div>
                </div>
                {/* Navbar Top */}

                {/* Main Content */}
                <div className="main-content">
                    <div className="back-content">
                        <nav className="navbar navbar-expand-md" id="navbar-color">
                            <div className="container">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                                    <span>
                                        <i><img src="./image/menu.png" alt="Menu" width="30px" /></i>
                                    </span>
                                </button>
                                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href='/'>Accueil</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href='/shop'>Boutique</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href='/cart'>Mon Panier</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href='/contact'>Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="content-header">
                            <p>Bienvenue chez Bijoux Shop</p>
                            <h1>Artisanat d'exception, conçu pour vous.</h1>
                            <p>Nous combinons tradition et innovation pour créer des bijoux qui célèbrent chaque moment précieux.</p>
                            <button>Découvrir la Collection</button>
                        </div>
                        <div className="services-section">
                            <div className="service-card">
                                <img src="./image/boutique.png" alt="Bijouterie" className="service-icon" />
                                <h3>Bijouterie</h3>
                                <p>Découvrez nos collections exclusives pour chaque occasion.</p>
                            </div>
                            <div className="service-card">
                                <img src="./image/earrings.png" alt="Création de bijoux" className="service-icon" />
                                <h3>Création de bijoux</h3>
                                <p>Des designs uniques fabriqués avec soin et passion.</p>
                            </div>
                            <div className="service-card">
                                <img src="./image/outils.png" alt="Réparation de bijoux" className="service-icon" />
                                <h3>Réparation</h3>
                                <p>Redonnez vie à vos bijoux grâce à notre expertise.</p>
                            </div>
                            <div className="service-card">
                                <img src="./image/bijoux.png" alt="Orfèvrerie" className="service-icon" />
                                <h3>Orfèvrerie</h3>
                                <p>Des métaux précieux travaillés avec excellence.</p>
                            </div>
                        </div>
                        <JewelrySection />
                        <Categories categories={categories} />
                        <WhyChooseUs />
                        <BijouxShop />
                        <CartProvider>
                            <Products product={product} />
                        </CartProvider>
                        <AboutUs />
                        <MoreHelp />
                        <Footer />
                    </div>
                </div>
                {/* Main Content */}
            </div>
        </>
    );
}
