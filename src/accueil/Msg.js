import React from 'react'
import { Link } from 'react-router-dom'
import "./msg.css"
export default function Msg() {
  return (
    <div>
        <main class="message-alert">
            <h1> Votre commande est passe avec succès</h1>
            <p class="lead">Vous avez besoin de passer une autre commande ? Cliquez ci-dessous pour ajouter plus des commandes .</p>
            <p class="lead">
            <Link to="/" style={{ color: 'blue', textDecoration: 'underline', fontSize: '18px',marginLeft:"36px" }}>
                  Passer une autre commande
                </Link>
            </p>
        </main>
    </div>
  )
}
