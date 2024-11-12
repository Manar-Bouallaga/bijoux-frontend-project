import React from 'react'
import { Link } from 'react-router-dom'
import "./msg.css"
export default function EmptyMsg() {
  return (
    <div>
        <main class="message-alert">
            <h1> Votre Panier est vide </h1>
            <p class="lead"> Cliquez ci-dessous pour ajouter des commandes .</p>
            <p class="lead">
            <Link to="/" style={{ color: 'blue', textDecoration: 'underline', fontSize: '18px',marginLeft:"36px" }}>
                  Passer une commande
                </Link>
            </p>
        </main>
    </div>
  )
}
