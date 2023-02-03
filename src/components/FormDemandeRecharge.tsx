import { IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";
import { baseUrl } from "../util/Api";
import Utilisateur from "../model/Utilisateur";
import axios from "axios";

export const FormDemandeRecharge: React.FC = () => {

    const id = new Utilisateur().getId();
    const [montant, setMontant] = useState();
    const history = useHistory();

    function demandeRecharge() {
        const url = baseUrl + `/addRechargeCompte/${id}?montant=${montant}`;

        axios.get(url)
            .then((response) => {
                console.log(response);
                history.push("/profil");
            });
    }

    return (
        <>
            <IonItem>
                <IonLabel position="floating">
                    Montant
                </IonLabel>
                <IonInput
                    onIonChange={(e: any) => setMontant(e.target.value)} />
            </IonItem>

            <IonButton
                expand="block"
                onClick={() => demandeRecharge()}>Recharger</IonButton>
        </>
    );
} 