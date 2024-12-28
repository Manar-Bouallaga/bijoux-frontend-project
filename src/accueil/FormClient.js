import React, { useState } from 'react'
import "./formstyle.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
// import { useCart } from 'react-use-cart'
export default function FormClient() {
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [mail, setMail] = useState("")
    const [telephone, setTelephone] = useState()
    const [adress, setAdress] = useState("")
    const [ville, setVille] = useState("")
    const [code_postal, setCodePostal] = useState("")
    const [pays, setPays] = useState("")
    const navigate = useNavigate();
    // const [clients, setClient] = useState({});
    const [clientId, setClientId] = useState(null);

    // recupere les items de panier 
    const items = localStorage.getItem('cartItems');
    


    const onSubmit = async () => {
        if (nom === "" || prenom === "" || mail === "" || telephone === "" || adress === "" || ville === "" || code_postal === "" || pays === "") {
            alert("Saisir tous les champs s'il vous plaît !");
        } else {
            const clients = { nom, prenom, mail, telephone, adress, ville, code_postal, pays };
            
            //console.log(clients);
    
            try {
                const ResponseData = await axios.post("http://127.0.0.1:8000/api/clients", clients);
                //console.log(ResponseData.data); // Vérifie que les données sont correctement reçues
                
                // Récupérer l'ID du client nouvellement créé
                const newClientID = ResponseData.data.data.id;
                setClientId(newClientID)
                if (items) {
                    const itemObject = JSON.parse(items);
                    const commandes = itemObject.map((item) => ({
                        date_commande: new Date().toISOString().split('T')[0], // Formate la date actuelle en "YYYY-MM-DD"
                        statut: "en course",
                        name: item.name,
                        price: item.price,
                        img: item.img,
                        quantity: item.quantity,
                        prixTotal: item.itemTotal,
                        client_id: newClientID
                  })
                
                );
               
                //   envoye la commande vers l'api 
                axios.post("http://127.0.0.1:8000/api/commandes", commandes)
                .then((response) => {
                    console.log(response.data);
                    
                    //  // Redirection vers "/message" après le succès
                     navigate('/msg');
                }).catch((error) => {
                    console.log(error);
                });
                } else {
                    console.log("L'élément JSON n'existe pas dans localStorage.");
                }
                
            
                // navigate('/message');
            } catch (error) {
                console.log(error);
            }
        }
    };
    

    return (
        <div class="registration-form">
            <form>
                <div class="form-icon">
                    <span><i class="icon icon-user"></i></span>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control item" id="nom" placeholder="Nom" value={nom} onChange={(event) => { setNom(event.target.value) }} />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control item" id="prenom" placeholder="Prenom" value={prenom} onChange={(event) => { setPrenom(event.target.value) }} />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control item" id="mail" placeholder="Email" value={mail} onChange={(event) => { setMail(event.target.value) }} />
                </div>
                <div class="form-group">
                    <input type="number" class="form-control item" id="telephone" placeholder="Telephone" value={telephone} onChange={(event) => { setTelephone(event.target.value) }} />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control item" id="adress" placeholder="Adress" value={adress} onChange={(event) => { setAdress(event.target.value) }} />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control item" id="ville" placeholder="Ville" value={ville} onChange={(event) => { setVille(event.target.value) }} />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control item" id="code_postal" placeholder="Code Postale" value={code_postal} onChange={(event) => { setCodePostal(event.target.value) }} />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control item" id="pays" placeholder="Pays" value={pays} onChange={(event) => { setPays(event.target.value) }} />
                </div>
                <div class="form-group">
                    <button onClick={onSubmit} type="button" class="btn btn-block create-account">Create Account</button>
                </div>
            </form>

        </div>
    )
}
