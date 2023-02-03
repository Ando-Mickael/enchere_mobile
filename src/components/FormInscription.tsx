import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import axios from "axios";
import { useState } from "react";
import Utilisateur from "../model/Utilisateur";
import { baseUrl } from "../util/Api";

export const FormInscription: React.FC = () => {

    const [nom, setNom] = useState();
    const [pseudo, setPseudo] = useState();
    const [email, setEmail] = useState();
    const [mdp, setMdp] = useState();

    const verifInscription = () => {
        const url = baseUrl + `/inscription?nom=${nom}&pseudo=${pseudo}&email=${email}&mdp=${mdp}`;
        console.log(url);
        axios.get(url)
            .then((response) => {
                console.log(response);
                window.location.assign("/connexion");
            });
    }

    return (
        <>
            <IonItem>
                <IonLabel position="floating">Nom</IonLabel>
                <IonInput
                    onIonChange={(e: any) => setNom(e.target.value)} />
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Pseudo</IonLabel>
                <IonInput
                    onIonChange={(e: any) => setPseudo(e.target.value)} />
            </IonItem>


            <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput
                    onIonChange={(e: any) => setEmail(e.target.value)} />
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Mot de passe</IonLabel>
                <IonInput
                    type="password"
                    onIonChange={(e: any) => setMdp(e.target.value)} />
            </IonItem>

            <IonButton
                expand="block"
                onClick={() => verifInscription()}>Inscription</IonButton>
        </>
    );
} 